/**
 * Custom hook for debouncing a value
 * To prevent multiple rapid API calls when pagination changes
 *
 *  */
import { useEffect, useState } from "react";

const useDebounce = (value: number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
