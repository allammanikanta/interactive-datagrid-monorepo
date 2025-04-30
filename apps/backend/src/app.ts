import cors from 'cors';
import express from 'express';

import tasksRouter from "./routes/tasks";
import usersRouter from './routes/users';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
