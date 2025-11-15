/**
 * Vision Model Configuration
 * 
 * This file contains available vision models for image-to-story generation.
 * Models are ordered from smallest to largest.
 * 
 * To use a custom model, add it to this array with the following structure:
 * {
 *   name: 'model-name',
 *   size: 'X.X GB',
 *   description: 'Description of the model',
 *   recommended: false, // Set to true for recommended models
 * }
 */

export const visionModels = [
  {
    name: 'moondream',
    size: '~1.6 GB',
    description: 'Very small, efficient model optimized for edge devices and low-resource machines. Fast inference but basic image understanding.',
    recommended: true,
    minRAM: '4 GB',
  },
  {
    name: 'llava:7b',
    size: '~4.5 GB',
    description: 'Small, balanced model suitable for general-purpose visual understanding. Good balance between quality and resource usage.',
    recommended: true,
    minRAM: '8 GB',
  },
  {
    name: 'bakllava',
    size: '~4.5 GB',
    description: 'Alternative small vision model with good performance. Similar to llava:7b with slightly different architecture.',
    recommended: false,
    minRAM: '8 GB',
  },
  {
    name: 'llava:13b',
    size: '~7.5 GB',
    description: 'Medium-sized model offering enhanced accuracy for complex visual tasks. Better quality but requires more resources.',
    recommended: false,
    minRAM: '16 GB',
  },
  {
    name: 'llava:34b',
    size: '~20 GB',
    description: 'Large model with excellent image understanding. Best quality but requires significant resources. Not recommended for most local machines.',
    recommended: false,
    minRAM: '32 GB',
  },
]

/**
 * Get the default model (first recommended model)
 */
export function getDefaultModel() {
  const recommended = visionModels.find(m => m.recommended)
  return recommended ? recommended.name : visionModels[0].name
}

/**
 * Get model information by name
 */
export function getModelInfo(modelName) {
  return visionModels.find(m => m.name === modelName) || visionModels[0]
}

/**
 * Get all recommended models
 */
export function getRecommendedModels() {
  return visionModels.filter(m => m.recommended)
}

