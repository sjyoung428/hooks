import { useEffect, useState } from "react";

interface useDebounceProps<T> {
  value: T;
  delay?: number;
}

export const useDebounce = <T>({ value, delay = 500 }: useDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return debouncedValue;
};
