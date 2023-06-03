import { lazy } from "react";
import Title from "~/components/Title";

const HomePage = () => {
  return <Title>Home</Title>;
};

export default HomePage;

HomePage.lazy = lazy(() => import("./HomePage"));
