import { Router } from 'express';

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = [
      { id: 1, name: "Alice John", avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
      { id: 5, name: "Eve Adams", avatar: "https://i.pravatar.cc/40?img=5" },
      { id: 6, name: "Frank Castle", avatar: "https://i.pravatar.cc/40?img=6" },
      { id: 7, name: "Grace Lee", avatar: "https://i.pravatar.cc/40?img=7" },
      { id: 8, name: "Henry Ford", avatar: "https://i.pravatar.cc/40?img=8" },
      { id: 9, name: "Ivy League", avatar: "https://i.pravatar.cc/40?img=9" },
      {
        id: 10,
        name: "Jack Daniels",
        avatar: "https://i.pravatar.cc/40?img=10",
      },
      {
        id: 11,
        name: "Kathy Bates",
        avatar: "https://i.pravatar.cc/40?img=11",
      },
      { id: 12, name: "Leo Messi", avatar: "https://i.pravatar.cc/40?img=12" },
      {
        id: 13,
        name: "Mia Wallace",
        avatar: "https://i.pravatar.cc/40?img=13",
      },
      {
        id: 14,
        name: "Nina Simone",
        avatar: "https://i.pravatar.cc/40?img=14",
      },
      {
        id: 15,
        name: "Oscar Wilde",
        avatar: "https://i.pravatar.cc/40?img=15",
      },
      {
        id: 16,
        name: "Paul Atreides",
        avatar: "https://i.pravatar.cc/40?img=16",
      },
    ];

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
