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

Before you begin, make sure you have:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Ollama** installed and running on your system
- **Git** (for cloning the repository)
- **Stable internet connection** (for downloading models)
- **At least 5 GB free disk space** (for models)

---

## Quick Start Guide

**For first-time users, follow these steps in order:**

1. ✅ Install Ollama (see installation guide below)
2. ✅ Start Ollama service (`ollama serve`)
3. ✅ Clone and setup the project
4. ✅ **Download a model manually** (recommended to avoid network issues)
5. ✅ Run the application (`npm run dev`)

**Important**: We strongly recommend downloading a model manually (Step 4) before running the app to avoid network timeout issues. The app can download models automatically, but manual download is more reliable.

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

#### Step 4: Download a Vision Model (Highly Recommended)

**⚠️ Important**: Download a model manually before running the app to avoid network timeout issues. The app can download models automatically, but manual download is more reliable and faster.

**Choose a model based on your machine:**

| Your Machine | Recommended Model | Command |
|--------------|------------------|---------|
| **Low-resource (4-8 GB RAM)** | `moondream` ⭐ | `ollama pull moondream` |
| **Standard (8-16 GB RAM)** | `llava:7b` ⭐ | `ollama pull llava:7b` |
| **High-resource (16+ GB RAM)** | `llava:13b` | `ollama pull llava:13b` |

**Download the model:**

```bash
# Start with the smallest model (recommended for first-time users)
ollama pull moondream
```

**What to expect:**
- Download time: 2-10 minutes depending on your internet speed
- Model size: ~1.6 GB for moondream, ~4.5 GB for llava:7b
- Progress: You'll see download progress in the terminal
- If download fails: See [Troubleshooting](#troubleshooting) section below

**After download completes:**
- The model is now ready to use
- You can select it in the app's dropdown menu
- No need to download again

**Note**: You can download multiple models and switch between them in the app. See [Available Models](#available-models) for a complete list.

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

#### Step 4: Download a Vision Model (Highly Recommended)

**⚠️ Important**: Download a model manually before running the app to avoid network timeout issues. The app can download models automatically, but manual download is more reliable and faster.

**Choose a model based on your machine:**

| Your Machine | Recommended Model | Command |
|--------------|------------------|---------|
| **Low-resource (4-8 GB RAM)** | `moondream` ⭐ | `ollama pull moondream` |
| **Standard (8-16 GB RAM)** | `llava:7b` ⭐ | `ollama pull llava:7b` |
| **High-resource (16+ GB RAM)** | `llava:13b` | `ollama pull llava:13b` |

**Download the model:**

```powershell
# Start with the smallest model (recommended for first-time users)
ollama pull moondream
```

**What to expect:**
- Download time: 2-10 minutes depending on your internet speed
- Model size: ~1.6 GB for moondream, ~4.5 GB for llava:7b
- Progress: You'll see download progress in the terminal
- If download fails: See [Troubleshooting](#troubleshooting) section below

**After download completes:**
- The model is now ready to use
- You can select it in the app's dropdown menu
- No need to download again

**Note**: You can download multiple models and switch between them in the app. See [Available Models](#available-models) for a complete list.

#### Step 5: Run the Application

```powershell
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

---

## Usage

### Step-by-Step Guide

1. **Start Ollama** (if not already running):
   ```bash
   ollama serve
   ```
   Keep this terminal window open.

2. **Start the App**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173`

3. **Select AI Model**: 
   - Choose your preferred vision model from the dropdown at the top
   - If you downloaded a model manually, select it from the list
   - If the model isn't downloaded, the app will try to download it automatically (may take time)

4. **Upload an Image**: 
   - Click the upload area or drag and drop an image file
   - Supported formats: JPG, PNG, GIF, WebP

5. **Generate Story**: 
   - Click the "✨ Generate Story" button
   - Wait 30-60 seconds for the story to be generated

6. **View Results**: 
   - The generated story will appear below the image
   - Use the copy or download buttons to save your story

### Important Notes

- **First-time model download**: If you haven't downloaded a model manually, the app will download it automatically when you select it. This may take 2-10 minutes and can fail due to network issues. We recommend downloading models manually first (see Step 4 in installation).

- **Model selection**: You can switch between different models in the dropdown. Each model has different quality and speed characteristics.

- **Internet required**: Model downloads require internet. Once downloaded, models work offline.

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

### The Process

1. **Model Selection**: You choose a vision model from the dropdown (defaults to `moondream`, the smallest recommended model)

2. **Image Upload**: When you upload an image, it's converted to a format the AI can understand (base64 encoding)

3. **AI Processing**: 
   - The image is sent to Ollama (running locally on your machine)
   - Ollama uses the selected vision model to "see" and understand the image
   - A prompt asks the AI to create a creative story based on what it sees

4. **Story Generation**: The AI analyzes the image and generates a creative, engaging story

5. **Display Results**: The generated story appears in the UI, where you can copy or download it

### Model Download

- **Manual Download (Recommended)**: Download models using `ollama pull <model-name>` before using the app
- **Automatic Download**: The app can download models automatically when you select them, but this may fail due to network issues
- **First Use**: If a model isn't downloaded, the app will attempt to download it automatically (may take 2-10 minutes)

**Best Practice**: Always download models manually first to avoid network timeout issues.

## Troubleshooting

### Common Issues

#### Connection Error
**Problem**: "Cannot connect to Ollama"

**Solution**:
- Make sure Ollama is running (`ollama serve`)
- Check that Ollama is accessible at `http://localhost:11434`
- On Windows, ensure Windows Firewall allows Ollama

#### Model Download Issues ⚠️

**Problem**: Model download fails, times out, or shows "TLS handshake timeout" error

This is the most common issue. Here's how to fix it:

**Why this happens:**
- Slow or unstable internet connection
- Firewall or proxy blocking Cloudflare R2 storage
- Network timeout issues
- Cloudflare CDN temporary issues

**✅ Solutions (try in this order):**

1. **Manual Download (Recommended)**:
   ```bash
   # macOS/Linux
   ollama pull moondream
   
   # Windows PowerShell
   ollama pull moondream
   ```
   Manual downloads are more reliable than automatic ones.

2. **Wait and Retry**:
   - Ollama automatically retries failed downloads
   - Wait 2-3 minutes and try again
   - Sometimes the issue resolves itself

3. **Check Internet Connection**:
   - Test your internet speed at [speedtest.net](https://www.speedtest.net)
   - Try a different network (mobile hotspot, different WiFi)
   - Disable VPN if active (VPNs can block Cloudflare)

4. **Start with Smallest Model**:
   ```bash
   ollama pull moondream  # Only ~1.6 GB, fastest to download
   ```
   Once this works, you can try larger models.

5. **Check Firewall/Proxy**:
   - **macOS**: System Settings > Network > Firewall (temporarily disable to test)
   - **Windows**: Windows Defender Firewall (allow Ollama through)
   - If behind corporate proxy, configure Ollama to use it

6. **Try Different Time**:
   - Cloudflare CDN issues are usually temporary
   - Try again in 30-60 minutes
   - Sometimes downloads work better at different times

7. **Verbose Mode for Debugging**:
   ```bash
   ollama pull moondream --verbose
   ```
   This shows detailed download progress and helps identify the issue.

8. **Check Disk Space**:
   - Ensure you have at least 5 GB free space
   - Models range from ~1.6 GB to ~20 GB

**If download keeps failing:**
- The app will show a helpful error message with specific solutions
- Try pulling a different, smaller model first
- Check Ollama logs in the terminal where `ollama serve` is running
- Consider using a different network (mobile hotspot, different location)

**Pro Tip**: Always download models manually before using the app. It's faster and more reliable than automatic downloads.

#### Model Runner Stopped ⚠️
**Problem**: "Model runner has unexpectedly stopped" or "resource limitations" error

This error occurs when the model crashes due to insufficient system resources.

**Why this happens:**
- Not enough RAM for the selected model
- Model is too large for your system
- Other applications using too much memory
- System running out of resources

**✅ Solutions (try in this order):**

1. **Switch to a Smaller Model** (Most Important):
   ```bash
   # Try the smallest model first
   ollama pull moondream
   ```
   Then select `moondream` in the app dropdown. This model only needs 4GB RAM.

2. **Check Your RAM**:
   - **macOS**: Activity Monitor > Memory tab
   - **Windows**: Task Manager > Performance > Memory
   - Ensure you have enough free RAM (not just total RAM)
   - Models need the minimum RAM listed in the [Available Models](#available-models) table

3. **Close Other Applications**:
   - Close browser tabs, video editors, games, etc.
   - Free up as much RAM as possible
   - Especially close other AI/ML applications

4. **Restart Ollama**:
   ```bash
   # Stop Ollama (Ctrl+C in the terminal where it's running)
   # Then start it again
   ollama serve
   ```

5. **Restart Your Computer**:
   - Sometimes memory gets fragmented
   - A fresh restart can free up resources

6. **Check Ollama Logs**:
   - Look at the terminal where `ollama serve` is running
   - Check for specific error messages
   - Look for memory-related errors

7. **Verify Model Requirements**:
   - Check the [Available Models](#available-models) table
   - Ensure your system meets the minimum RAM requirement
   - If you have 8GB RAM, use `moondream` or `llava:7b`, not `llava:13b`

**Model RAM Requirements:**
- `moondream`: 4 GB minimum
- `llava:7b`: 8 GB minimum
- `llava:13b`: 16 GB minimum
- `llava:34b`: 32 GB minimum

**If the error persists:**
- The model you're trying to use is too large for your system
- Always start with `moondream` (smallest model)
- Only upgrade to larger models if you have sufficient RAM

#### Slow Generation
**Problem**: Story generation takes a long time

**Solution**:
- Story generation typically takes 30-60 seconds depending on your hardware
- Ensure you have sufficient RAM (8GB+ recommended)
- Close other resource-intensive applications
- Smaller models (moondream) generate faster than larger ones

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
