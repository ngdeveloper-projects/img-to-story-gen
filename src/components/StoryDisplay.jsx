import './StoryDisplay.css'

function StoryDisplay({ story, image }) {
  const handleDownload = () => {
    const blob = new Blob([story], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'story.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(story)
    alert('Story copied to clipboard!')
  }

  return (
    <div className="story-display">
      <div className="story-header">
        <h2>📚 Your Story</h2>
        <div className="story-actions">
          <button onClick={handleCopy} className="action-btn">
            📋 Copy
          </button>
          <button onClick={handleDownload} className="action-btn">
            💾 Download
          </button>
        </div>
      </div>

      {image && (
        <div className="story-image-container">
          <img
            src={URL.createObjectURL(image)}
            alt="Story inspiration"
            className="story-image"
          />
        </div>
      )}

      <div className="story-content">
        <p>{story}</p>
      </div>
    </div>
  )
}

export default StoryDisplay

