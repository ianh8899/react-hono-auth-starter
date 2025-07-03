# React Hono Starter Kit

This is a **React Hono Starter Kit** that integrates with **Better Auth** for authentication. It provides a boilerplate for building modern web applications with a React frontend and a Hono-based backend.

## Features

- **React** for the frontend.
- **Tailwind CSS** for styling.
- **Hono** as the backend framework.
- **Better Auth** for authentication and session management.
- **Sqlite** wil be used as the Database for better-auth but you can choose the db of your choice for anything else.
- Pre-configured with TypeScript for type safety.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ianh8899/react-hono-auth-starter.git
   cd react-hono-starter-kit
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration see .env.example for reference
   # When running docker make sure you update environment variables in the compose.yaml file
   ```

4. **Start all services (includes automatic migration):**

   ```bash
   docker compose up -w
   ```

   This will:

   - Start PostgreSQL
   - Run better-auth migrations automatically
   - Start the Hono API server (after migration completes)
   - Start the React frontend
   - track changes made in the client and server /src folders and live update the running container

   Services will be available at:

   - React app: http://localhost:5173
   - Hono API: http://localhost:3000
   - Database admin (Adminer): http://localhost:8080
