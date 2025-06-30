import React from 'react';
import { Button as AntdButton, Card, Typography } from 'antd'; // Sử dụng Button của Antd
import { CustomButton } from '@my-monorepo/base-ui-components'; // Sử dụng CustomButton từ base UI lib

const { Title, Text } = Typography;

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Product A (TS)', price: 100 },
  { id: 2, name: 'Product B (TS)', price: 200 },
  { id: 3, name: 'Product C (TS)', price: 300 },
];

const ProductPage: React.FC = () => {
  const handleBuyClick = (product: Product) => {
    alert(`Buying ${product.name} (Antd Button) from TS Product Page!`);
  };

  const handleCustomButtonClick = () => {
    alert('Custom Button clicked on TS Product Page!');
  };

  return (
    <div>
      <Title level={2}>Product Page (TypeScript Module - Vite)</Title>
      <Text>
        This page is an independent TypeScript app module, using both Ant Design
        and custom UI components.
      </Text>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {products.map(product => (
          <Card
            key={product.id}
            title={product.name}
            style={{ width: 240 }}
            actions={[
              <AntdButton
                type="primary"
                onClick={() => handleBuyClick(product)}
              >
                Buy (Antd)
              </AntdButton>,
            ]}
          >
            <p>Price: ${product.price}</p>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: '30px' }}>
        <Title level={4}>Example of Custom Button</Title>
        <CustomButton onClick={handleCustomButtonClick}>
          Click Me (Custom UI)
        </CustomButton>
      </div>
    </div>
  );
};

export default ProductPage;
