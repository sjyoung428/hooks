import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import ObserverExamplePage from "~/pages/ObserverExamplePage";
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
        element: <HomePage.lazy />,
      },
      {
        path: "/debounce",
        element: <DebounceExamplePage.lazy />,
      },
      {
        path: "/throttle",
        element: <ThrottleExamplePage.lazy />,
      },
      {
        path: "/observer",
        element: <ObserverExamplePage.lazy />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
