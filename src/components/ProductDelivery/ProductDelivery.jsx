import React from 'react';
import '../../common.css';
import styles from './ProductDelivery.module.css';

export function ProductDelivery() {
  return (
    <>
      <div className={`${styles.deliveryWrap} lineSection marginTop`}>
        <span className={`gray400Color fontSize14 fontWeight400`}>
          택배배송
        </span>
        <span
          className={`${styles.deliveryPrice} gray400Color fontSize14 fontWeight700`}
        >
          3000원
        </span>
        <span className={`secondaryColor fontSize14 fontWeight700`}>
          (주문시 결제)
        </span>
        <span
          className={`${styles.subDescription} gray300Color fontSize14 fontWeight400`}
        >
          10개마다 부과
        </span>
      </div>
    </>
  );
}
