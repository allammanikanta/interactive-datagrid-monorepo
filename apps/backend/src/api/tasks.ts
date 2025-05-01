import { Router } from "express";

const router = Router();

// Sample Test Data
export const rows = [
  {
    id: "Task-001",
    task: "Analyze Plasmid A",
    volume: 10000000,
    plasmid: "pUC19",
    summary: "This is a summary of the task.",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
    ],
  },
  {
    id: "Task-002",
    task: "Prepare Sample B",
    summary: "Task summary",
    volume: 500000,
    plasmid: "pBR322",
    assignee: [
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
    ],
  },
  {
    id: "Task-003",
    task: "Sequence DNA C",
    summary: "This is a summary of the task.",
    volume: 2979100,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
    ],
  },
  {
    id: "Task-004",
    task: "Sequence DNA C",
    summary: "Task summary",
    volume: 12432,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
    ],
  },
  {
    id: "Task-005",
    task: "Sequence DNA C",
    summary: "Summary",
    volume: 34223,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
    ],
  },
  {
    id: "Task-006",
    task: "Sequence DNA C",
    summary: "This is a summary of the task.",
    volume: 54342,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    ],
  },
  {
    id: "Task-007",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    ],
  },
  {
    id: "Task-008",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    ],
  },
  {
    id: "Task-009",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    ],
  },
  {
    id: "Task-010",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [
      {
        id: 1,
        name: "Alice John",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/40?img=4" },
      {
        id: 5,
        name: "Eve Adams",
        avatar: "https://i.pravatar.cc/40?img=5",
      },
    ],
  },
  {
    id: "Task-011",
    task: "Sequence DNA C",
    summary: "This is a summary of the task.",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [
      { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    ],
  },
  {
    id: "Task-012",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
];

router.get("/", (req, res) => {
  const { page = 1, pageSize = 5 } = req.query; // Get page and pageSize from query params
  const startIndex = (Number(page) - 1) * Number(pageSize);
  const endIndex = startIndex + Number(pageSize);
  const paginatedRows = rows.slice(startIndex, endIndex);

  res.json({
    rowCount: rows.length, // Total number of rows
    rows: paginatedRows, // Paginated rows for the current page
  });
});

export default router;
