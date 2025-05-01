import { Router } from "express";

import MessageResponse from "../interfaces/MessageResponse";
import tasksRouter from "./tasks";
import usersRouter from "./users";

const router = Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "List of APIs",
    getUsers: "/api/users",
    getTasks: "/api/tasks",
  });
});

router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);

export default router;
