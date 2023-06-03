import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Suspense fallback={<p>로딩 중...</p>}>
          <Outlet />
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
