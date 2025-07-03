import { betterAuth } from "better-auth";
import { Pool } from "pg";
import "dotenv/config";

export const auth = betterAuth({
  database: new Pool({
    connectionString:
      process.env.DATABASE_URL ||
      "postgres://postgres:password@localhost:5432/authdb",
  }),
  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: ["http://localhost:5173"],
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
