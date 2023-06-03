import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import DebounceExamplePage from "~/pages/DebounceExamplePage";
import HomePage from "~/pages/HomePage";
import NotFoundPage from "~/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/debounce",
        element: <DebounceExamplePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
