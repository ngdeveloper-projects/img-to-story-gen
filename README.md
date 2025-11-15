# Image to Story Creator

A React application that generates creative stories from uploaded images using Ollama's vision models.

## Features

- 📷 Upload images via drag-and-drop or file picker
- ✨ Generate creative stories based on image content
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

#### Step 4: Pull the Required Model

The app uses **llava:7b** (a smaller, optimized model ~4-5 GB) instead of the full llava model (~20 GB) for faster downloads and lower resource usage.

The app will automatically pull the model on first use, but you can pre-download it:
```bash
ollama pull llava:7b
```

This model is approximately 4-5 GB and may take a few minutes depending on your internet connection.

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

#### Step 4: Pull the Required Model

The app uses **llava:7b** (a smaller, optimized model ~4-5 GB) instead of the full llava model (~20 GB) for faster downloads and lower resource usage.

The app will automatically pull the model on first use, but you can pre-download it:
```powershell
ollama pull llava:7b
```

This model is approximately 4-5 GB and may take a few minutes depending on your internet connection.

#### Step 5: Run the Application

```powershell
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

---

## Usage

1. **Upload an Image**: Click the upload area or drag and drop an image file
2. **Generate Story**: Click the "✨ Generate Story" button
3. **View Results**: The generated story will appear below the image
4. **Copy or Download**: Use the copy or download buttons to save your story

## How It Works

1. The app uses Ollama's `llava:7b` model (a smaller, optimized version ~4-5 GB), which is a vision-language model capable of understanding images
2. When you upload an image, it's converted to base64 format
3. The image is sent to Ollama along with a prompt asking for a creative story
4. The generated story is displayed in the UI

**Note:** We use `llava:7b` instead of the full `llava` model to reduce download size from ~20 GB to ~4-5 GB, making it more accessible for local machines with limited storage.

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
- Manually pull the model: `ollama pull llava:7b` (macOS) or `ollama pull llava:7b` (Windows)
- Check your internet connection
- The model is ~4-5 GB, so ensure you have enough disk space
- If you still have issues, try: `ollama pull llava:7b --verbose` to see detailed download progress

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
│   │   └── StoryDisplay.jsx     # Story display component
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

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Ollama** - Local AI model runner
- **llava:7b** - Smaller vision-language model (~4-5 GB) for image understanding (optimized for local machines)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Open an issue on [GitHub](https://github.com/ngdeveloper-projects/img-to-story-gen/issues)
- Make sure Ollama is running before reporting connection issues
- Include your OS version and Node.js version when reporting bugs
