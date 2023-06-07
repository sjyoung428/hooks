import { useEffect, useState } from "react";
import { createDom } from "~/utils/createDom";
import { isServer } from "~/utils/isServer";

const usePortal = (id: string): HTMLElement | null => {
  const [elementSnapshot, setElementSnapshot] = useState<HTMLElement | null>(
    isServer() ? null : createDom(id)
  );

  useEffect(() => {
    const parentElement = document.body;
    const hasElement = parentElement?.querySelector<HTMLElement>(`#${id}`);
    const element = hasElement || createDom(id);

    if (!hasElement) {
      parentElement.appendChild(element);
    }
    setElementSnapshot(element);
  }, [id]);

  return elementSnapshot;
};

export default usePortal;
