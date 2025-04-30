import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import serverless from "serverless-http";

import tasksRouter from "./tasks";
import usersRouter from "./users";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);

// Serverless handler for Vercel deployment
export const handler = serverless(app);

// Local development for testing (only for local environment)
if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}
