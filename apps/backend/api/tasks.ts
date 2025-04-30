import { Router } from "express";

const router = Router();

// Sample Test Data
export const rows = [
  {
    id: "task-001",
    task: "Analyze Plasmid A",
    volume: 20,
    plasmid: "pUC19",
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
    id: "task-002",
    task: "Prepare Sample B",
    volume: 50,
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
    id: "task-003",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-004",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-005",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-006",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-007",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-008",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-009",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-010",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-011",
    task: "Sequence DNA C",
    volume: 100,
    plasmid: "pGEM-T",
    assignee: [],
  },
  {
    id: "task-012",
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
