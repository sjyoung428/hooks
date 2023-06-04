import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import NotFoundPage from "~/pages/NotFoundPage";
import * as lazy from "~/router/lazy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <lazy.HomePage />,
      },
      {
        path: "debounce",
        element: <lazy.DebounceExamplePage />,
      },
      {
        path: "throttle",
        element: <lazy.ThrottleExamplePage />,
      },
      {
        path: "observer",
        element: <lazy.ObserverExamplePage />,
      },
      {
        path: "out-side-click",
        element: <lazy.OutsideClickExamplePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
