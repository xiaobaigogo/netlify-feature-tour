import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Outlet></Outlet>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
