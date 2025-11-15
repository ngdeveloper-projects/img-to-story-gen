import { useState } from 'react'
import { visionModels, getDefaultModel } from '../config/models'
import './ModelSelector.css'

function ModelSelector({ onModelChange, selectedModel }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleModelSelect = (modelName) => {
    onModelChange(modelName)
    setIsExpanded(false)
  }

  const currentModel = visionModels.find(m => m.name === selectedModel) || visionModels[0]

  return (
    <div className="model-selector-container">
      <div className="model-selector-header">
        <label htmlFor="model-select">AI Model:</label>
        <div className="model-select-wrapper">
          <select
            id="model-select"
            value={selectedModel}
            onChange={(e) => handleModelSelect(e.target.value)}
            className="model-select"
          >
            {visionModels.map((model) => (
              <option key={model.name} value={model.name}>
                {model.name} ({model.size}) {model.recommended ? '⭐' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="model-info">
        <div className="model-description">
          <strong>{currentModel.name}</strong> - {currentModel.description}
        </div>
        <div className="model-specs">
          <span className="model-size">Size: {currentModel.size}</span>
          <span className="model-ram">Min RAM: {currentModel.minRAM}</span>
          {currentModel.recommended && (
            <span className="model-badge">⭐ Recommended</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModelSelector

