# Image to Story Creator

A React application that generates creative stories from uploaded images using Ollama's vision models.

## Features

- 📷 Upload images via drag-and-drop or file picker
- ✨ Generate creative stories based on image content
- 🤖 **Configurable AI models** - Choose from small to medium-sized models based on your machine's capabilities
- 💾 Download stories as text files
- 📋 Copy stories to clipboard
- 🎨 Beautiful, modern UI

## Prerequisites

- Node.js (v16 or higher)
- Ollama installed and running on your system
- Git (for cloning the repository)

---

## Installation Guide

### For macOS Users

#### Step 1: Install Ollama

**Option A: Using Homebrew (Recommended)**
```bash
brew install ollama
```

**Option B: Using Install Script**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Option C: Manual Installation**
1. Visit [https://ollama.ai](https://ollama.ai)
2. Download the macOS installer
3. Open the downloaded `.dmg` file
4. Drag Ollama to your Applications folder
5. Launch Ollama from Applications

#### Step 2: Start Ollama Service

Open Terminal and run:
```bash
ollama serve
```

Keep this terminal window open. Ollama will run in the background.

#### Step 3: Clone and Setup the Project

```bash
# Clone the repository
git clone https://github.com/ngdeveloper-projects/img-to-story-gen.git
cd img-to-story-gen

# Install project dependencies
npm install
```

#### Step 4: Pull a Vision Model (Optional)

The app supports multiple vision models ranging from very small (~1.6 GB) to medium (~7.5 GB). You can select your preferred model in the UI dropdown.

**Recommended models for different setups:**

- **Low-resource machines (4-8 GB RAM)**: `moondream` (~1.6 GB) ⭐
- **Standard machines (8-16 GB RAM)**: `llava:7b` (~4.5 GB) ⭐
- **High-resource machines (16+ GB RAM)**: `llava:13b` (~7.5 GB)

The app will automatically pull the selected model on first use, but you can pre-download it:
```bash
# For very small model (recommended for low-resource machines)
ollama pull moondream

# For small model (recommended for most users)
ollama pull llava:7b

# For medium model (better quality, requires more resources)
ollama pull llava:13b
```

See the [Available Models](#available-models) section for a complete list.

#### Step 5: Run the Application

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

---

### For Windows Users

#### Step 1: Install Ollama

**Option A: Using Winget (Windows 11/10 with App Installer)**
```powershell
winget install Ollama.Ollama
```

**Option B: Using Installer**
1. Visit [https://ollama.ai](https://ollama.ai)
2. Download the Windows installer (`.exe` file)
3. Run the installer and follow the setup wizard
4. Ollama will be added to your PATH automatically

**Option C: Using Chocolatey**
```powershell
choco install ollama
```

#### Step 2: Start Ollama Service

Open PowerShell or Command Prompt and run:
```powershell
ollama serve
```

Keep this window open. Ollama will run in the background.

**Note:** On Windows, you may need to allow Ollama through Windows Firewall on first run.

#### Step 3: Clone and Setup the Project

Open PowerShell or Command Prompt:

```powershell
# Clone the repository
git clone https://github.com/ngdeveloper-projects/img-to-story-gen.git
cd img-to-story-gen

# Install project dependencies
npm install
```

#### Step 4: Pull a Vision Model (Optional)

The app supports multiple vision models ranging from very small (~1.6 GB) to medium (~7.5 GB). You can select your preferred model in the UI dropdown.

**Recommended models for different setups:**

- **Low-resource machines (4-8 GB RAM)**: `moondream` (~1.6 GB) ⭐
- **Standard machines (8-16 GB RAM)**: `llava:7b` (~4.5 GB) ⭐
- **High-resource machines (16+ GB RAM)**: `llava:13b` (~7.5 GB)

The app will automatically pull the selected model on first use, but you can pre-download it:
```powershell
# For very small model (recommended for low-resource machines)
ollama pull moondream

# For small model (recommended for most users)
ollama pull llava:7b

# For medium model (better quality, requires more resources)
ollama pull llava:13b
```

See the [Available Models](#available-models) section for a complete list.

#### Step 5: Run the Application

```powershell
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

---

## Usage

1. **Select AI Model**: Choose your preferred vision model from the dropdown at the top (see [Available Models](#available-models) for recommendations)
2. **Upload an Image**: Click the upload area or drag and drop an image file
3. **Generate Story**: Click the "✨ Generate Story" button
4. **View Results**: The generated story will appear below the image
5. **Copy or Download**: Use the copy or download buttons to save your story

**Note**: The first time you use a model, it will be automatically downloaded. This may take a few minutes depending on the model size and your internet connection.

## Available Models

The app supports multiple vision models, allowing you to choose based on your machine's capabilities:

| Model | Size | Min RAM | Description | Recommended For |
|-------|------|---------|-------------|-----------------|
| **moondream** ⭐ | ~1.6 GB | 4 GB | Very small, efficient model optimized for edge devices | Low-resource machines, fast inference |
| **llava:7b** ⭐ | ~4.5 GB | 8 GB | Balanced model for general-purpose visual understanding | Most users, good balance of quality and speed |
| **bakllava** | ~4.5 GB | 8 GB | Alternative small vision model with good performance | Users wanting to try different architectures |
| **llava:13b** | ~7.5 GB | 16 GB | Medium-sized model with enhanced accuracy | High-resource machines, better quality |
| **llava:34b** | ~20 GB | 32 GB | Large model with excellent understanding | High-end machines only, best quality |

⭐ = Recommended models

### Model Selection Tips

- **Start with `moondream`** if you have limited RAM (4-8 GB) or want the fastest inference
- **Use `llava:7b`** for the best balance between quality and resource usage (recommended for most users)
- **Try `llava:13b`** if you have 16+ GB RAM and want better story quality
- **Avoid `llava:34b`** unless you have a high-end machine with 32+ GB RAM

## How It Works

1. You select a vision model from the dropdown (defaults to the smallest recommended model)
2. When you upload an image, it's converted to base64 format
3. The image is sent to Ollama along with the selected model and a prompt asking for a creative story
4. The generated story is displayed in the UI

The app automatically downloads the selected model on first use if it's not already installed.

## Troubleshooting

### Common Issues

#### Connection Error
**Problem**: "Cannot connect to Ollama"

**Solution**:
- Make sure Ollama is running (`ollama serve`)
- Check that Ollama is accessible at `http://localhost:11434`
- On Windows, ensure Windows Firewall allows Ollama

#### Model Not Found
**Problem**: Model download fails or takes too long

**Solution**:
- Manually pull the model: `ollama pull <model-name>` (e.g., `ollama pull moondream` or `ollama pull llava:7b`)
- Check your internet connection
- Ensure you have enough disk space (models range from ~1.6 GB to ~20 GB)
- If you still have issues, try: `ollama pull <model-name> --verbose` to see detailed download progress
- Try a smaller model if downloads keep failing (start with `moondream`)

#### Slow Generation
**Problem**: Story generation takes a long time

**Solution**:
- Story generation typically takes 30-60 seconds depending on your hardware
- Ensure you have sufficient RAM (8GB+ recommended)
- Close other resource-intensive applications

#### Port Already in Use
**Problem**: Port 5173 is already in use

**Solution**:
- Close other applications using port 5173
- Or modify `vite.config.js` to use a different port

### Platform-Specific Issues

#### macOS
- If you get permission errors, you may need to allow Terminal to access network connections in System Preferences > Security & Privacy
- If Homebrew is not installed, install it from [https://brew.sh](https://brew.sh)

#### Windows
- If PowerShell shows execution policy errors, run: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Ensure Node.js is added to your PATH (usually done automatically during installation)
- If you encounter firewall issues, allow Ollama through Windows Defender Firewall

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
img-to-story-gen/
├── src/
│   ├── components/
│   │   ├── ImageUpload.jsx      # Image upload component
│   │   ├── StoryDisplay.jsx     # Story display component
│   │   └── ModelSelector.jsx    # Model selection dropdown
│   ├── config/
│   │   └── models.js            # Vision model configuration
│   ├── services/
│   │   └── ollamaService.js    # Ollama API integration
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Customizing Models

You can add your own custom vision models by editing `src/config/models.js`:

```javascript
export const visionModels = [
  // ... existing models ...
  {
    name: 'your-custom-model',
    size: '~X.X GB',
    description: 'Description of your custom model',
    recommended: false,
    minRAM: 'X GB',
  },
]
```

**Steps to add a custom model:**

1. Open `src/config/models.js`
2. Add your model to the `visionModels` array with the required fields:
   - `name`: The exact model name as it appears in Ollama
   - `size`: Approximate size (for display purposes)
   - `description`: Brief description of the model
   - `recommended`: `true` or `false` (recommended models show a ⭐)
   - `minRAM`: Minimum RAM requirement
3. Save the file - the model will appear in the dropdown automatically
4. Make sure the model is available in Ollama: `ollama pull your-custom-model`

**Note**: Custom models must be vision-capable models that support image input in Ollama.

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Ollama** - Local AI model runner
- **Configurable Vision Models** - Support for multiple models from very small (moondream ~1.6 GB) to medium (llava:13b ~7.5 GB)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Open an issue on [GitHub](https://github.com/ngdeveloper-projects/img-to-story-gen/issues)
- Make sure Ollama is running before reporting connection issues
- Include your OS version and Node.js version when reporting bugs
