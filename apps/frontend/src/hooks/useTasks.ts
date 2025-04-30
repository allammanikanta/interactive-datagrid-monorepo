import { useQuery } from "@tanstack/react-query";

import useDebounce from "./useDebounce";

export interface Task {
  id: string;
  task: string;
  volume: number;
  plasmid: string;
  assignee: { id: number; name: string; avatar: string }[];
}

// Function to fetch paginated tasks data from the backend
const fetchPaginatedRows = async (page: number, pageSize: number) => {
  const res = await fetch(`/api/tasks?page=${page + 1}&pageSize=${pageSize}`);
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return res.json(); // Response contains paginated tasks data
};

export const usePaginatedTasks = (page: number, pageSize: number) => {
  const debouncedPage = useDebounce(page, 100);
  const debouncedPageSize = useDebounce(pageSize, 100);

  return useQuery({
    queryKey: ["tasks", debouncedPage, debouncedPageSize],
    queryFn: () => fetchPaginatedRows(page, pageSize),
    staleTime: 10000, // Based on the use case this can be adjusted
  });
};
