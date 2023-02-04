import "./App.css";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import HeaderNav from "./layout/header";
import Contact from "./layout/contact";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E98800",
          colorBgLayout: "#fff",
          borderRadius: 6,
        },
        components: {
          Layout: {
            colorBgBase: "#f5f5f5",
            colorBgHeader: "#fff",
          },
        },
      }}
    >
      <Layout>
        <Header>
          <HeaderNav />
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
        <Content>
          <Contact></Contact>
        </Content>
        <Footer style={{ textAlign: "center" }}>Copyright © xiaobaigogo</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
