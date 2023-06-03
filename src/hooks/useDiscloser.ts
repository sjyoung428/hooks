import { useCallback, useState } from "react";

export const useDiscloser = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const onOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);
  return { isOpen, onOpen, onClose, onToggle };
};
