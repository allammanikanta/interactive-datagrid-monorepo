/**
 * Custom hook to update a task using the API.
 * This hook encapsulates the logic for making an API call to update a task's field.
 */
import { useCallback } from "react";

import { BaseUrl } from "../utils/constants";

const useUpdateTaskApi = () => {
  return useCallback(async (id: string, field: string, value: unknown) => {
    const response = await fetch(`${BaseUrl}/api/tasks/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
    if (!response.ok) {
      throw new Error("Server error");
    }
  }, []);
};

export default useUpdateTaskApi;
