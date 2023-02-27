import React from 'react';
import '../../common.css';
import item from '../../data/item';
import styles from './ProductDiscount.module.css';

export function ProductDiscount() {
  let price = item[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let lastPrice = item[0].lastprice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <div className={`${styles.disconutWrap} lineSection marginTop`}>
        <span
          className={`${styles.discountRate} secondaryColor fontSize24 fontWeight700`}
        >
          <span className={`A11yHidden`}>할인 퍼센트</span>
          {item[0].discountRate * 100}%
        </span>
        <span
          className={`${styles.cost} gray300Color fontSize16 fontWeight700 lineThrough`}
        >
          <span className={`A11yHidden`}>원가</span>
          {price}원
        </span>
        <span
          className={`${styles.salePrice} gray400Color fontSize22 fontWeight400`}
        >
          <span className={`A11yHidden`}>할인된 가격</span>
          {lastPrice}원
        </span>
      </div>
    </>
  );
}
