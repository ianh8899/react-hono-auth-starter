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
   ```

4. **Start all services (includes automatic migration):**

   ```bash
   # First time and ongoing - this handles everything
   docker compose up --build

   # Or run migration manually first if needed
   docker compose run --rm migrate
   ```

   This will:

   - Start PostgreSQL
   - Run better-auth migrations automatically
   - Start the API server (after migration completes)
   - Start the React frontend

   Services will be available at:

   - React app: http://localhost:5173
   - Hono API: http://localhost:3000
   - Database admin (Adminer): http://localhost:8080
