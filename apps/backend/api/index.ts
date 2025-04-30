import cors from "cors";
import express from "express";
import serverless from "serverless-http";

import tasksRouter from "./tasks";
import usersRouter from "./users";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);

// Serverless handler
export const handler = serverless(app);

// Local development for testing
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// import cors from 'cors';
// import express from 'express';

// import tasksRouter from "./routes/tasks";
// import usersRouter from './routes/users';

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// app.use("/api/users", usersRouter);
// app.use("/api/tasks", tasksRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
