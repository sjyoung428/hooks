export const createDom = (id: string): HTMLElement => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  return element;
};
