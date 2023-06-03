import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
