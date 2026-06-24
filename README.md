# 📷 Pixabay Image Discovery Hub

A modern, fast, and feature-rich **Pixabay Clone** built using **React 19** and **Vite**. This application connects directly to the Pixabay API to provide users with a clean, responsive, and interactive interface for searching, viewing, and downloading high-quality royalty-free images.

---

## 🚀 Live Demo & Key Features

- **🔍 Smart Search Engine**: Instant search query lookup targeting millions of royalty-free images from the Pixabay library.
- **🌗 Light & Dark Theme Support**: Smooth dark and light mode toggle via CSS Custom Properties (`data-theme`) saved at the document root level.
- **📄 Full Pagination**: Structured pagination controls to navigate through matching search results cleanly.
- **✨ Detailed View & Stats Dashboard**:
  - Immersive full-screen detail view panel for selected images.
  - Interactive details: Image resolution/dimensions, ID, uploader avatar, and name.
  - Social Engagement stats: Live view count, like count, comment count, and download count.
  - Smart scroll position restoration when returning to search results.
- **📥 Direct Image Download**: Real-time client-side blob download capability, bypassing browser defaults to download the high-resolution file directly.
- **🎨 Responsive CSS Layout**: Adaptive grid layout designed from scratch using vanilla CSS flexbox/grid without any bloated framework.
- **⚡ Reusable Component Architecture**: Clean separation between global components (Navbar, Footer, Card, Pagination) and utility components (custom UI Buttons and Inputs).

---

## 🛠️ Tech Stack & Tools

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool / Bundler:** [Vite 8](https://vite.dev/)
- **HTTP Client:** [Axios](https://github.com/axios/axios)
- **Styling:** Vanilla CSS (Modern Grid, Flexbox, Transitions)
- **Linter:** [Oxlint](https://oxc.rs/) (High-performance linter for JS/TS)
- **API Source:** [Pixabay API](https://pixabay.com/api/docs/)

---

## 📂 Project Structure

Below is the directory structure highlighting key files in the application:

```text
Deployment/
├── public/                  # Public assets
├── src/
│   ├── assets/              # Icons and static resources
│   ├── Components/          # Global components
│   │   ├── Card/            # Card grid container and item cards
│   │   │   └── Card.jsx
│   │   ├── Footer/          # Website footer with links
│   │   │   └── Footer.jsx
│   │   ├── Navbar/          # Search bar, brand, and theme toggle controls
│   │   │   └── Navbar.jsx
│   │   └── Pagination/      # Navigation controls (Prev / Next)
│   │       └── Pagination.jsx
│   ├── Services/            # API integration Layer
│   │   └── Api.js           # Pixabay axios API setup & requests
│   ├── UI/                  # Generic UI components
│   │   ├── Button/          # Reusable Button element
│   │   │   └── Button.jsx
│   │   └── Input/           # Reusable Input element
│   │       └── Input.jsx
│   ├── App.css              # Main application styling (Theme styles, layouts)
│   ├── App.jsx              # Main Orchestrator / Application State
│   ├── index.css            # Base browser resets and global variables
│   └── main.jsx             # React application mount point
├── index.html               # Main HTML entry point
├── vite.config.js           # Vite development and build settings
├── package.json             # Node dependencies and build scripts
└── README.md                # Project documentation (this file)
```

---

## ⚙️ Setup & Local Installation

Follow these steps to run the project locally on your machine:

### Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Clone the Workspace
Clone or download the project files into your local directory.

### 2. Install Dependencies
Run the following command to install required npm packages:
```bash
npm install
```

### 3. API Configuration
The application fetches images using a Pixabay API key.
Open [src/Services/Api.js](file:///d:/Excersies/Besant/React_Projects/Deployment/src/Services/Api.js) to configure or update the API key:
```javascript
const API_KEY = "YOUR_PIXABAY_API_KEY";
```
*Note: A default key is already pre-configured for initial testing, but it is recommended to get your own free API key from [Pixabay's API Docs](https://pixabay.com/api/docs/).*

### 4. Run Development Server
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

### 5. Build for Production
To bundle and optimize the application for deployment:
```bash
npm run build
```
The output files will be created in the `dist` directory.

### 6. Lint the Code
To check for syntax, quality, or formatting rules using Oxlint:
```bash
npm run lint
```

---

## 🎨 Theme & Custom Styling

- Styling is powered by custom CSS variables configured in [src/App.css](file:///d:/Excersies/Besant/React_Projects/Deployment/src/App.css).
- Theme toggle controls state on the document node `[data-theme='dark']` and `[data-theme='light']`, allowing instantaneous palette swaps for elements across the app.
- Animations and transitions on hover states add a premium feel to search cards, tags, and inputs.

---

## 📝 License
This project is open-source and free to customize. 
All images fetched through this application are subject to the [Pixabay License](https://pixabay.com/service/license/) – Free for commercial and non-commercial use, no attribution required.
