import { isServer } from "../utils/isServer";

type UseNetworkCallback = () => void;
type UseNetworkOptions = {
  onOnline?: UseNetworkCallback;
  onOffline?: UseNetworkCallback;
};

export const useNetwork = ({ onOnline, onOffline }: UseNetworkOptions = {}) => {
  if (isServer()) {
    return;
  }

  const handleOnline = () => {
    if (onOnline) {
      onOnline();
    }
  };

  const handleOffline = () => {
    if (onOffline) {
      onOffline();
    }
  };

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
};
