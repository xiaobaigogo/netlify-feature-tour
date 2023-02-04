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
          colorPrimary: "#F3AAC1",
          colorBgLayout:
            "linear-gradient(rgb(243,227,232), rgb(219, 166, 166))",
          borderRadius: 6,
        },
        components: {
          Layout: {
            colorBgBase: "#f5f5f5",
            colorBgHeader:
              "linear-gradient(rgb(255,255,255), rgb(243,227,232))",
          },
          Menu: {
            // colorBgContainer:
            //   "#eee",
            // colorBgElevated: "#eee",
            // colorBorderBg: "#EEE",
            colorPrimaryBg: "#eee",
            colorFill: "eee",
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
          <Contact></Contact>
        </Content>
        <Footer style={{ textAlign: "center", background: "#f5f5f5" }}>
          Copyright © xiaobaigogo
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
