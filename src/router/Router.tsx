import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import DebounceExamplePage from "~/pages/DebounceExamplePage";
import HomePage from "~/pages/HomePage";
import NotFoundPage from "~/pages/NotFoundPage";
import ThrottleExamplePage from "~/pages/ThrottleExamplePage";

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
      {
        path: "/throttle",
        element: <ThrottleExamplePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
