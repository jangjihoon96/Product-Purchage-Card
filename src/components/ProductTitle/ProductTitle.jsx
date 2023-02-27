import React from 'react';
import '../../common.css';
import item from '../../data/item';
import styles from './ProductTitle.module.css';

export function ProductTitle() {
  return (
    <>
      <h2 className={`${styles.productTitle} fontSize18`}>
        <span>{item[0].name}</span>
        <span>{item[0].subname}</span>
      </h2>
    </>
  );
}
