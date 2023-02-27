import React from 'react';
import '../../common.css';
import styles from './ProductImage.module.css';
import productImage from '../../assets/product.svg';

export function ProductImage() {
  return (
    <>
      <img
        src={productImage}
        alt="래피젠 코로나 자가 검사 키트"
        className={styles.productImage}
      />
    </>
  );
}
