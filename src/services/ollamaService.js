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
      console.log(`Note: If download fails due to network issues, try pulling manually: ollama pull ${modelName}`)
      
      try {
        // Pull the model with a longer timeout
        await ollama.pull({ model: modelName })
        console.log(`Model ${modelName} pulled successfully!`)
      } catch (pullError) {
        // Check for network-related errors
        const errorMsg = pullError.message || String(pullError)
        if (errorMsg.includes('timeout') || errorMsg.includes('TLS') || errorMsg.includes('network') || errorMsg.includes('connection')) {
          throw new Error(
            `Network error while downloading model. This is usually due to:\n` +
            `1. Slow or unstable internet connection\n` +
            `2. Firewall/proxy blocking the connection\n` +
            `3. Cloudflare CDN issues\n\n` +
            `Solutions:\n` +
            `- Try again later (Ollama will retry automatically)\n` +
            `- Pull the model manually: ollama pull ${modelName}\n` +
            `- Check your internet connection\n` +
            `- Try a smaller model first (moondream ~1.6GB)`
          )
        }
        throw pullError
      }
    }
  } catch (error) {
    console.error('Error ensuring model:', error)
    
    // Provide more specific error messages
    if (error.message && error.message.includes('Network error')) {
      throw error // Re-throw our custom network error
    }
    
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
    
    const errorMsg = error.message || String(error) || ''
    
    // Check for connection errors
    if (errorMsg.includes('ECONNREFUSED') || error.cause?.code === 'ECONNREFUSED') {
      throw new Error(
        'Cannot connect to Ollama. Please make sure Ollama is running on http://localhost:11434'
      )
    }
    
    // Check for model runner stopped errors (resource limitations)
    if ((errorMsg.includes('model runner') && errorMsg.includes('stopped')) || 
        errorMsg.includes('unexpectedly stopped') ||
        errorMsg.includes('resource limitations') ||
        errorMsg.includes('internal error')) {
      throw new Error(
        `Model runner stopped - likely due to insufficient resources.\n\n` +
        `This usually means:\n` +
        `1. Not enough RAM for the selected model\n` +
        `2. Model is too large for your system\n` +
        `3. Other applications using too much memory\n\n` +
        `Solutions:\n` +
        `- Try a smaller model (moondream ~1.6GB requires only 4GB RAM)\n` +
        `- Close other applications to free up RAM\n` +
        `- Restart Ollama: Stop 'ollama serve' and start it again\n` +
        `- Check available RAM: You need at least ${modelInfo.minRAM} for ${selectedModel}\n` +
        `- Check Ollama server logs in the terminal where 'ollama serve' is running`
      )
    }
    
    // Check for out of memory errors
    if (errorMsg.includes('out of memory') || errorMsg.includes('OOM') || errorMsg.includes('memory')) {
      throw new Error(
        `Out of memory error. The model requires more RAM than available.\n\n` +
        `Solutions:\n` +
        `- Switch to a smaller model (try moondream which only needs 4GB RAM)\n` +
        `- Close other applications to free up memory\n` +
        `- Restart your computer to free up memory\n` +
        `- Current model (${selectedModel}) requires ${modelInfo.minRAM} RAM`
      )
    }
    
    throw error
  }
}

