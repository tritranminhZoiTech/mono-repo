import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd'; // Import các component Antd
import 'antd/dist/reset.css'; // Import CSS reset của Antd v5

const { Header, Content, Footer } = Layout;

const ProductPage = lazy(() => import('../../product/src/main'));

const items = [
  { key: '/', label: <Link to="/">Home (JS Page)</Link> },
  { key: '/products', label: <Link to="/products">Products (TS Page)</Link> },
  // Thêm các menu item khác
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider>
        {' '}
        {/* Bao bọc ứng dụng bằng ConfigProvider */}
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{ color: 'white', fontSize: '20px', marginRight: '20px' }}
            >
              My Monorepo App
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['/']}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: '24px 50px' }}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 380,
                borderRadius: '8px',
              }}
            >
              <Suspense fallback={<div>Loading Page...</div>}>
                <Routes>
                  <Route path="/" element={<>Home page</>} />
                  <Route path="/products" element={<ProductPage />} />
                </Routes>
              </Suspense>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Monorepo POC with Ant Design ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </ConfigProvider>
    </Router>
  </React.StrictMode>
);
