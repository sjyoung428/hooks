import { useEffect, useRef, useState } from "react";

interface UseThrottleProps<T> {
  value: T;
  delay?: number;
}

export const useThrottle = <T>({ value, delay = 500 }: UseThrottleProps<T>) => {
  const [throttleValue, setThrottleValue] = useState<T>(value);
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRun.current >= delay) {
        setThrottleValue(value);
        lastRun.current = Date.now();
      }
    }, delay - (Date.now() - lastRun.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttleValue;
};
