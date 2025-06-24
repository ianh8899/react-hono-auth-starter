# React Hono Starter Kit

This is a **React Hono Starter Kit** that integrates with **Better Auth** for authentication. It provides a boilerplate for building modern web applications with a React frontend and a Hono-based backend.

## Features

- **React** for the frontend.
- **Hono** as the backend framework.
- **Better Auth** for authentication and session management.
- Pre-configured with TypeScript for type safety.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-hono-starter-kit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the better-auth migration**
    ```bash
    npx @better-auth/cli migrate --db ./server/sqlite.db --migrations ./server/src/better-auth_migrations
    ```

5. **Start development servers:**
   ```bash
   npm run dev:client
   npm run dev:server
   ```

   This will start:
   - React app on http://localhost:5173
   - Hono API on http://localhost:3000
