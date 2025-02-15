# Project Documentation

## Overview

This project is a solar energy assistant agent built with React, Redux, and Google's Gemini API. It allows users to ask questions about solar energy and receive helpful information.

## Portfolio Description

This project is a solar energy assistant agent that provides users with accurate and helpful information about solar energy. It is built with React, Redux, and Google's Gemini API. The project features a chat interface where users can ask questions about solar panel technology, installation processes, maintenance requirements, cost & ROI analysis, industry regulations, and market trends. The agent responds in a clear and concise manner, tailored to the user's level of expertise.

**Key Features:**

*   Chat interface for asking questions about solar energy
*   Accurate and helpful information about solar energy
*   Responses tailored to the user's level of expertise

**Technologies Used:**

*   React
*   Redux
*   Google's Gemini API

## File Structure

```
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── store.js
│   ├── assets
│   │   ├── assets.js
│   │   ├── bulb_icon.png
│   │   ├── code_icon.png
│   │   ├── compass_icon.png
│   │   ├── gallery_icon.png
│   │   ├── gallery_icon2.png
│   │   ├── gemini_icon.png
│   │   ├── history_icon.png
│   │   ├── menu_icon.png
│   │   ├── message_icon.png
│   │   ├── mic_icon.png
│   │   ├── plus_icon.png
│   │   ├── question_icon.png
│   │   ├── react.svg
│   │   ├── send_icon.png
│   │   ├── setting_icon.png
│   │   ├── user_icon.png
│   │   └── youtube_icon.png
│   ├── components
│   │   ├── Main
│   │   │   ├── Main.css
│   │   │   └── Main.jsx
│   │   └── Sidenavbar
│   │   │   ├── Sidebar.css
│   │   │   └── Sidebar.jsx
│   ├── config
│   │   └── gemini.js
│   ├── context
│   │   └── Context.jsx
│   └── redux
│       └── chatSlice.js
```

## File Descriptions

*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `eslint.config.js`: Configuration file for ESLint, a JavaScript linter.
*   `index.html`: The main HTML file for the application.
*   `package-lock.json`: Records the exact versions of dependencies used in the project.
*   `package.json`: Contains metadata about the project, including dependencies and scripts.
*   `README.md`: A file containing information about the project, typically displayed on the project's repository.
*   `vite.config.js`: Configuration file for Vite, a build tool.

### `src` directory

*   `App.jsx`: The main component that renders the `Sidebar` and `Main` components.
*   `index.css`: Global CSS file.
*   `main.jsx`: The entry point of the React application, rendering the `App` component inside the `Provider` and `ContextProvider`.
*   `store.js`: Configures the Redux store.

### `src/assets` directory

Contains static assets such as images.

*   `assets.js`: Defines the paths to the assets.
*   `bulb_icon.png`: Icon for bulb.
*   `code_icon.png`: Icon for code.
*   `compass_icon.png`: Icon for compass.
*   `gallery_icon.png`: Icon for gallery.
*   `gallery_icon2.png`: Icon for gallery 2.
*   `gemini_icon.png`: Icon for gemini.
*   `history_icon.png`: Icon for history.
*   `menu_icon.png`: Icon for menu.
*   `message_icon.png`: Icon for message.
*   `mic_icon.png`: Icon for mic.
*   `plus_icon.png`: Icon for plus.
*   `question_icon.png`: Icon for question.
*   `react.svg`: React logo.
*   `send_icon.png`: Icon for send.
*   `setting_icon.png`: Icon for setting.
*   `user_icon.png`: Icon for user.
*   `youtube_icon.png`: Icon for youtube.

### `src/components` directory

Contains the React components.

*   `Main/Main.jsx`: The main component that displays the chat interface.
*   `Main/Main.css`: CSS file for the `Main` component.
*   `Sidenavbar/Sidebar.jsx`: The sidebar component that displays the navigation menu.
*   `Sidenavbar/Sidebar.css`: CSS file for the `Sidebar` component.

### `src/config` directory

Contains configuration files.

*   `gemini.js`: Configuration file for the Gemini API.

### `src/context` directory

Contains the React context.

*   `Context.jsx`: Provides the context for the application, including the state and functions for managing the chat interface.

### `src/redux` directory

Contains the Redux files.

*   `chatSlice.js`: Defines the Redux slice for the chat state.

## Redux Store

The Redux store is configured in `src/store.js`. It uses the `chatReducer` to manage the chat state.

## Context

The React context is provided in `src/context/Context.jsx`. It provides the following values:

*   `prevPrompts`: An array of previous prompts.
*   `setPrevPrompts`: A function to set the previous prompts.
*   `onSent`: A function to send a message to the Gemini API.
*   `setRecentPrompt`: A function to set the recent prompt.
*   `recentPrompt`: The recent prompt.
*   `showResult`: A boolean indicating whether to show the result.
*   `loading`: A boolean indicating whether the application is loading.
*   `resultData`: The result data from the Gemini API.
*   `input`: The input value.
*   `setInput`: A function to set the input value.
*   `newchat`: A function to clear the chat.
*   `messages`: The messages in the chat.

## Gemini API

The Gemini API is configured in `src/config/gemini.js`. It uses the `GoogleGenerativeAI` class to interact with the Gemini API.
