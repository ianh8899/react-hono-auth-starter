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

4. **Run the better-auth migration**

   ```bash
   cd /server
   npx @better-auth/cli migrate
   cd ..
   ```

5. **Start development servers:**

   ```bash
   npm run dev:client
   npm run dev:server
   ```

   This will start:

   - React app on http://localhost:5173
   - Hono API on http://localhost:3000
