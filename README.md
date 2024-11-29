# Logbrain Website

A modern, responsive website for Logbrain - a data and AI consulting company built with React, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your Windows laptop:

1. **Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation by running:
     ```bash
     node --version
     npm --version
     ```

2. **Git** (optional, for version control)
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation:
     ```bash
     git --version
     ```

## Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If using Git
   git clone <repository-url>
   
   # Or download and extract the ZIP file
   ```

2. **Navigate to Project Directory**
   ```bash
   cd logbrain
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

## Development

To run the project locally:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

## Building for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```
   This will create an optimized production build in the `dist` folder.

2. **Preview Production Build** (optional)
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Deploy to Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```bash
   netlify login
   ```
4. Deploy the site:
   ```bash
   netlify deploy
   ```
5. Follow the prompts and specify `dist` as the publish directory

### Option 2: Deploy to Static Web Hosting

1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist` folder to your web hosting service

## Project Structure

```
logbrain/
├── src/
│   ├── components/
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

## Environment Variables

No environment variables are required for basic deployment. However, if you need to add any in the future, create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
```

## Troubleshooting

1. **Node Modules Issues**
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

2. **Build Errors**
   - Ensure all dependencies are installed
   - Clear the build cache:
     ```bash
     npm run build -- --force
     ```

3. **TypeScript Errors**
   - Run TypeScript compiler to check for errors:
     ```bash
     npx tsc --noEmit
     ```

## Support

For any issues or questions, please contact:
- Email: contact@logbrain.com
- Phone: +1 (555) 123-4567

## License

This project is licensed under the MIT License - see the LICENSE file for details.