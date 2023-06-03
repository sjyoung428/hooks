import { useEffect, useRef, useState } from "react";

interface useThrottleProps<T> {
  value: T;
  delay?: number;
}

export const useThrottle = <T>({ value, delay = 500 }: useThrottleProps<T>) => {
  const [throttleValue, setTrottleValue] = useState<T>(value);
  const throttling = useRef(false);

  useEffect(() => {
    if (throttling.current === false) {
      setTrottleValue(value);
      throttling.current = true;
    }

    setTimeout(() => {
      if (throttling?.current) {
        throttling.current = false;
      }
    }, delay);
  }, [value, delay]);

  return throttleValue;
};
