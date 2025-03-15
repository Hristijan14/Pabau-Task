# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

React GraphQL Infinite Scrolling with i18n

Project Overview
This is a React project that fetches character data from the Rick and Morty GraphQL API using Apollo Client. The project implements infinite scrolling, sorting, filtering, and supports language toggling using react-i18next.

Features
- Fetches character data from GraphQL API with Apollo Client.
- Implements infinite scrolling for seamless data loading.
- Allows sorting by character name and origin.
- Supports filtering characters by status and species.
- Multilingual support (English & German) with i18next.
- Styled with Tailwind CSS for a responsive UI.

Tech Stack
- React (Functional Components & Hooks)
- Apollo Client (GraphQL Fetching & Caching)
- i18next (Internationalization)
- Tailwind CSS (Styling)

Installation & Setup
1. Clone the repository:
   git clone https://github.com/Hristijan14/Pabau-Task.git
2. Navigate to the project directory:
   cd your-repo
3. Install dependencies:
   npm install
4. Run the development server:
   npm run dev

Language Toggle
The app supports English (en) and German (de). Users can switch between languages using the toggle switch in the UI.

Deploying to GitHub Pages
To deploy your project to GitHub Pages, follow these steps:
1. Install gh-pages:
   npm install gh-pages --save-dev
2. Add the following scripts to package.json:
   json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
3. Deploy the project:
   npm run deploy
   
