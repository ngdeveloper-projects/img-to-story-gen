import { useState, useRef } from 'react'
import { generateStory } from '../services/ollamaService'
import './ImageUpload.css'

function ImageUpload({
  onImageUpload,
  onStoryGenerated,
  onError,
  onLoading,
  currentImage,
  selectedModel,
}) {
  const [preview, setPreview] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        onError('Please select a valid image file')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onImageUpload(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerateStory = async () => {
    if (!currentImage) {
      onError('Please upload an image first')
      return
    }

    setIsGenerating(true)
    onLoading(true)

    try {
      const story = await generateStory(currentImage, selectedModel)
      onStoryGenerated(story)
    } catch (error) {
      console.error('Error generating story:', error)
      onError(
        error.message ||
          'Failed to generate story. Make sure Ollama is running and the model is available.'
      )
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onImageUpload(file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="image-upload-container">
      <div
        className="upload-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />

        {preview ? (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="preview-image" />
            <button
              className="change-image-btn"
              onClick={(e) => {
                e.stopPropagation()
                fileInputRef.current?.click()
              }}
            >
              Change Image
            </button>
          </div>
        ) : (
          <div className="upload-placeholder">
            <div className="upload-icon">📷</div>
            <p>Click or drag an image here to upload</p>
            <p className="upload-hint">Supports JPG, PNG, GIF, and WebP</p>
          </div>
        )}
      </div>

      {preview && (
        <button
          className="generate-btn"
          onClick={handleGenerateStory}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating Story...' : '✨ Generate Story'}
        </button>
      )}
    </div>
  )
}

export default ImageUpload

