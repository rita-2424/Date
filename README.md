# 📅 React Date Picker App

A simple and elegant Date Picker application built using **React**, **TypeScript**, and **Vite**. This project is designed as a minimal and responsive date selection interface that can be reused or extended for larger applications.

## 🚀 Features

- 📆 Interactive date picker component
- ⚡ Fast development with Vite
- 🔐 Type safety with TypeScript
- ♻️ Hot Module Replacement (HMR)
- ✅ Linting with ESLint & TypeScript rules

## 🛠 Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite**
- **ESLint**
- **CSS**

## 📦 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/rita-2424/Date.git

# Navigate to the project directory
cd Date

# Install dependencies
npm install

# Start the development server
npm run dev
```
## 🧹 Linting

This project includes ESLint configuration with TypeScript and React rules. You can expand it further as needed.

### 🔧 Recommended ESLint Expansion

```js
parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
  project: ["./tsconfig.json", "./tsconfig.node.json"],
  tsconfigRootDir: __dirname,
},
extends: [
  "plugin:@typescript-eslint/recommended-type-checked",
  "plugin:@typescript-eslint/stylistic-type-checked",
  "plugin:react/recommended",
  "plugin:react/jsx-runtime"
],
```
## 🔗 Live Demo

Check out the live version on CodeSandbox:  
👉 [Click Here to Try It Out](https://codesandbox.io/p/github/rita-2424/Date/main)
