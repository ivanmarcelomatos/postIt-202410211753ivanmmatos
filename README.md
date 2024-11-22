# Notebook App

The **Notebook App** is a web application for managing notes with different priority levels, using a simple and efficient interface. This project leverages React with Material UI for styling and components, as well as Axios for API requests.

Project developed from a video lessons posted publicly on YouTube at <https://www.youtube.com/playlist?list=PL0QN_lbTofYcw7bzm8y-l2BMslKfMfNgr> by the Code Zero channel, to which I express my gratitude for sharing knowledge.




## Key Concepts

### Project Architecture
- **React**: Used to build the user interface declaratively and efficiently.
- **Material UI**: A library of React components that provides styled and accessible elements like buttons, forms, and icons.
- **Axios**: HTTP request library, used to connect with the backend and fetch/update note data.
- **Controlled States**: Extensive use of states (using `useState`, `useEffect` hooks) to control UI updates based on server responses.
- **Modularized CSS**: Styling organized into CSS files specific to each component, promoting modularity and maintainability.

### Main Features
- **Note Creation**: A form that allows users to add notes with a title and content.
- **Priority Filter**: A filter using radio buttons to display notes based on priority (normal, high, all).
- **Priority Change**: Marking notes as priority with a single click, enabling users to organize notes by importance.
- **Note Deletion**: Functionality to delete notes.






## Installation

### Prerequisites
- Node.js and npm installed (Node.js v14 or higher recommended).

### Installation Steps
1. **Clone the repository**:
   ```bash
   $ git clone git@github.com:ivanmarcelomatos/postIt-202410211753ivanmmatos.git

2. Navigate to the project directory:
   $ cd notebook-app
   
3.Install dependencies:
  $ npm install






## How to Run

To start the project in a development environment:
  $ npm start
  The app will be available at http://localhost:3000





## Build for Production
  To create an optimized production build:
  $ npm run build
  This command generates static files in the build folder, ready to be hosted on a web server.






## Folder Structure

📦notebook-app
 ┣ 📂src
 ┃ ┣ 📂Components         # Reusable components
 ┃ ┃ ┣ 📜Notes.js         # Component for displaying notes
 ┃ ┃ ┗ 📜RadioButton.js   # Component for priority filtering
 ┃ ┣ 📂services           # API configuration for Axios
 ┃ ┃ ┗ 📜api.js           # Axios instance with base configuration
 ┃ ┣ 📜App.js             # Main app component
 ┃ ┣ 📜index.js           # React entry point
 ┣ 📜README.md            # Project documentation
 ┣ 📜package.json         # npm dependencies and scripts
 ┗ ...





## Technologies Used

React - JavaScript library for user interfaces
Material UI - Styled components for React
Axios - HTTP client for making API requests
Node.js - Environment for running JavaScript on the server
Express - Framework for building the RESTful API






