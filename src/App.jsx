import React, { useState } from 'react';
import './theme.css';
import './common.css';
import {
  ProductImage,
  ProductTitle,
  ProductDiscount,
  ProductDelivery,
  ProductBuyButton,
  ProductCountButton,
  ProductFinallyInfo,
} from './components';

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <section className="container">
      <ProductImage />
      <ProductTitle />
      <ProductDiscount />
      <ProductDelivery />
      <ProductCountButton count={count} setCount={setCount} />
      <ProductFinallyInfo count={count} />
      <ProductBuyButton count={count} />
    </section>
  );
}
