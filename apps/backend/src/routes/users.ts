import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Alice Johnson", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Charlie Brown", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
  ]);
});

export default router;
