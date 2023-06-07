import { lazy } from "react";

export const HomePage = lazy(() => import("~/pages/HomePage"));

export const DebounceExamplePage = lazy(
  () => import("~/pages/DebounceExamplePage")
);
export const ObserverExamplePage = lazy(
  () => import("~/pages/ObserverExamplePage")
);
export const ThrottleExamplePage = lazy(
  () => import("~/pages/ThrottleExamplePage")
);

export const OutsideClickExamplePage = lazy(
  () => import("~/pages/OutsideClickExamplePage")
);

export const NetworkExamplePage = lazy(
  () => import("~/pages/NetworkExamplePage")
);
