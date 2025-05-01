# Interactive Data Grid Component

A type-safe, pluggable, and performant Data Grid component built with React and TypeScript, featuring dynamic cell rendering/editing and multi-user assignment functionality.

**Tech Stack: Vite · React · TypeScript · Express · Node.js · MUI · React Query**

## Deployement

The application is deployed on **Vercel**. You can view the live version of the project at:

[Vercel Live Demo](https://interactive-datagrid-monorepo.vercel.app/)

## Core Technologies and Features

- **React**: A JavaScript library for building user interfaces, chosen for its component-based architecture and reactivity.
- **TypeScript**: Provides type safety and better developer productivity, ensuring reliable and maintainable code.
- **Material-UI**: A React UI framework for building fast, responsive, and customizable components (e.g., DataGrid, TextField, Autocomplete).
- **React Query**: A data-fetching library that simplifies server-side pagination, data synchronization, and caching, improving performance and handling loading and error states effectively.
- **Express.js**: A minimal and flexible Node.js web application framework used for building the backend API for task management.
- **In-Memory Data Storage**: Used for demo purposes to store task data, which would typically be replaced by a real database in production (e.g., PostgreSQL, MongoDB).
- **React.memo**: Memoization in React to optimize rendering by preventing unnecessary re-renders of grid components, improving performance for larger datasets.
- **Vercel Deployment**: The app is deployed on Vercel, providing a seamless production-ready environment for both the frontend and backend.


## Getting Started

### Prerequisites
Before you begin, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/en)
- **Git** - [Download Git](https://git-scm.com)

### 1. **Clone the repository**

   First, clone the repository to your local machine by running the following command in your terminal:

   ```bash
   git clone https://github.com/allammanikanta/interactive-datagrid-monorepo.git
   ```

### 2. **Install dependencies**

   Navigate into the project directory and install the necessary dependencies using npm:

   ```bash
   cd interactive-datagrid-monorepo/apps
   ```

   **Frontend**
   ```bash
   cd frontend
   npm install
   ```

   **Backend**
   ```bash
   cd backend
   npm install
   ```


### 3. **Run the development servers**

   Once the dependencies are installed, you can start the development server by running the following command:

   **Backend**: This will start the backend on http://localhost:3000.
   ```bash
   npm run dev
   ```
   **Frontend**
   ```bash
   npm run dev
   ```

### 4. **Visit the app locally**

   After the server starts, open your browser and visit http://localhost:5173 to see the app running locally.

   ```bash
   https://localhost:5173
   ```