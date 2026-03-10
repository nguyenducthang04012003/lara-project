import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Topbar />

      <Content
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}
