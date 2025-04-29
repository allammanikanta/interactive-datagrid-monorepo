/**
 * Custom hook to fetch and manage users data using React Query
 * It retrieves a list of users from the `/api/users` endpoint and provides
 * the necessary data, loading, and error states.
 */
import { useQuery } from "@tanstack/react-query";

export interface User {
  id: number;
  name: string;
  avatar?: string;
}

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    },
  });
};
