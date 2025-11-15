import { Ollama } from 'ollama'
import { getModelInfo, getDefaultModel } from '../config/models'

// Initialize Ollama client - defaults to http://localhost:11434
const ollama = new Ollama()

/**
 * Ensures the required model is available, pulling it if necessary
 * @param {string} modelName - Name of the model to ensure is available
 */
async function ensureModel(modelName) {
  try {
    const modelInfo = getModelInfo(modelName)
    
    // Check if model exists
    const models = await ollama.list()
    const modelExists = models.models.some((m) => 
      m.name === modelName || m.name.includes(modelName.split(':')[0])
    )

    if (!modelExists) {
      console.log(`Model ${modelName} not found. Pulling model...`)
      console.log(`Model size: ${modelInfo.size}. Please be patient...`)
      // Pull the model
      await ollama.pull({ model: modelName })
      console.log(`Model ${modelName} pulled successfully!`)
    }
  } catch (error) {
    console.error('Error ensuring model:', error)
    throw new Error(
      `Failed to ensure model is available. Make sure Ollama is running. Error: ${error.message}`
    )
  }
}

/**
 * Converts image file to base64 string
 */
function imageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
      const base64 = reader.result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * Generates a story based on the uploaded image
 * @param {File} imageFile - The image file to analyze
 * @param {string} modelName - Optional model name (defaults to configured default)
 * @returns {Promise<string>} The generated story
 */
export async function generateStory(imageFile, modelName = null) {
  try {
    // Use provided model or default from config
    const selectedModel = modelName || getDefaultModel()
    const modelInfo = getModelInfo(selectedModel)
    
    // First, ensure the model is available
    await ensureModel(selectedModel)

    // Convert image to base64
    const imageBase64 = await imageToBase64(imageFile)

    // Generate story prompt
    const prompt = `Look at this image and create a creative, engaging story based on what you see. The story should be 3-5 paragraphs long, descriptive, and imaginative. Make it interesting and captivating.`

    // Use chat API for vision models
    const response = await ollama.chat({
      model: selectedModel,
      messages: [
        {
          role: 'user',
          content: prompt,
          images: [imageBase64],
        },
      ],
      stream: false,
    })

    return response.message?.content || 'Unable to generate story at this time.'
  } catch (error) {
    console.error('Error generating story:', error)
    if (error.message?.includes('ECONNREFUSED') || error.cause?.code === 'ECONNREFUSED') {
      throw new Error(
        'Cannot connect to Ollama. Please make sure Ollama is running on http://localhost:11434'
      )
    }
    throw error
  }
}

