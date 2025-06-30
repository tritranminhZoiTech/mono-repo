import React from 'react';
import ProductPage from './App';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ConfigProvider>
//       <div
//         style={{
//           padding: '20px',
//           minHeight: '100vh',
//           backgroundColor: '#f5f5f5',
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: 'white',
//             padding: '24px',
//             borderRadius: '8px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//           }}
//         >
//           <h1
//             style={{
//               color: '#1890ff',
//               marginBottom: '16px',
//               borderBottom: '1px solid #d9d9d9',
//               paddingBottom: '8px',
//             }}
//           >
//             Product Page - Development Mode
//           </h1>
//           <ProductPage />
//         </div>
//       </div>
//     </ConfigProvider>
//   </React.StrictMode>
// );

export default ProductPage;
