# React Hono Starter Kit

This is a **React Hono Starter Kit** that integrates with **Better Auth** for authentication. It provides a boilerplate for building modern web applications with a React frontend and a Hono-based backend.

## Features

- **React** for the frontend.
- **Tailwind CSS** for styling.
- **Hono** as the backend framework.
- **Better Auth** for authentication and session management.
- **PostgreSQL** database with Docker setup for better-auth and application data.
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

2. **Set up environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration see .env.example for reference
   # When running docker make sure you update environment variables in the compose.yaml file
   ```

3. **Start all services in Docker (includes automatic migration):**

   ```bash
   docker compose up -w
   ```

   This will:

   - Install dependencies
   - Build the Docker images
   - Start PostgreSQL
   - Run better-auth migrations automatically
   - Start the Hono API server (after migration completes)
   - Start the React frontend
   - Track changes made in the client and server /src folders and live update the running container

4. **Optional: Install dependencies locally (for IDE support):**

   ```bash
   # Optional - for better IDE support and local testing
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

   Services will be available at:

   - React app: http://localhost:5173
   - Hono API: http://localhost:3000
   - Database admin (Adminer): http://localhost:8080

## Alternative Development (without Docker)

If you prefer to run without Docker:

```bash
# Install dependencies
npm install

# Start PostgreSQL (you'll need it running locally)
# Run migrations manually
cd server && npx @better-auth/cli migrate

# Start development servers
npm run dev:client  # In one terminal
npm run dev:server  # In another terminal
```
