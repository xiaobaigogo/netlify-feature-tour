import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import HeaderNav from "./layout/header";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 6,
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
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
