import { useCallback, useEffect } from "react";

type UseNetworkCallback = () => void;
type UseNetworkOptions = {
  onOnline?: UseNetworkCallback;
  onOffline?: UseNetworkCallback;
};

export const useNetwork = ({ onOnline, onOffline }: UseNetworkOptions = {}) => {
  const handleOnline = useCallback(() => {
    if (onOnline) {
      onOnline();
    }
  }, [onOnline]);

  const handleOffline = useCallback(() => {
    if (onOffline) {
      onOffline();
    }
  }, [onOffline]);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOffline, handleOnline]);
};
