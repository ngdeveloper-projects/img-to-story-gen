import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import StoryDisplay from './components/StoryDisplay'
import ModelSelector from './components/ModelSelector'
import { getDefaultModel } from './config/models'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [story, setStory] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedModel, setSelectedModel] = useState(getDefaultModel())

  const handleImageUpload = (file) => {
    setImage(file)
    setStory('')
    setError('')
  }

  const handleStoryGenerated = (generatedStory) => {
    setStory(generatedStory)
    setLoading(false)
  }

  const handleError = (errorMessage) => {
    setError(errorMessage)
    setLoading(false)
  }

  const handleLoading = (isLoading) => {
    setLoading(isLoading)
    setError('')
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📖 Image to Story Creator</h1>
        <p>Upload an image and let AI create a story for you!</p>
      </header>

      <ModelSelector
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
      />

      <ImageUpload
        onImageUpload={handleImageUpload}
        onStoryGenerated={handleStoryGenerated}
        onError={handleError}
        onLoading={handleLoading}
        currentImage={image}
        selectedModel={selectedModel}
      />

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      {loading && (
        <div className="loading-message">
          <p>✨ Creating your story... This may take a moment.</p>
        </div>
      )}

      {story && <StoryDisplay story={story} image={image} />}
    </div>
  )
}

export default App

