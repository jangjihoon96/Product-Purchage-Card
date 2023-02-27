import React, { useState } from 'react';
import '../../common.css';
import item from '../../data/item';
import { ProductTooltip } from '../ProductTooltip/ProductTooltip';
import styles from './ProductFinallyInfo.module.css';

export function ProductFinallyInfo({ count }) {
  const [tooltipActive, setTooltipActive] = useState(false);
  const handleTooltip = () => {
    setTooltipActive(!tooltipActive);
  };

  let total = (item[0].lastprice * count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <>
      <div className={`${styles.finallyWrap} marginTop`}>
        <span
          className={`${styles.total} gray400Color fontSize14 fontWeight700`}
        >
          총 상품 금액
          <button className={styles.tooltipInfoButton} onClick={handleTooltip}>
            ?
          </button>
          {tooltipActive ? (
            <ProductTooltip
              tooltipActive={tooltipActive}
              setTooltipActive={setTooltipActive}
            />
          ) : null}
        </span>
        <span
          className={`${styles.totalQuantity} gray300Color fontSize14 fontWeight400`}
        >
          총 수량 {count}개
        </span>
        <span
          className={`${styles.totalPrice} secondaryColor fontSize22 fontWeight700`}
        >
          {total}원
        </span>
      </div>
    </>
  );
}
