import React from 'react';
import '../../common.css';
import styles from './ProductTooltip.module.css';

export function ProductTooltip({ tooltipActive, setTooltipActive }) {
  const handleCloseTooltip = () => {
    setTooltipActive(tooltipActive == false);
  };
  return (
    <>
      <div className={styles.productTooltip}>
        <h2 className={`gray400Color fontSize12 fontWeight400`}>
          총 상품금액에{' '}
          <strong className={`secondaryColor fontWeight400`}>
            배송비는 포함되어 있지 않습니다.
          </strong>
          <br />
          결제시 배송비가 추가될 수 있습니다.
        </h2>
        <button className={styles.closeButton} onClick={handleCloseTooltip}>
          <span className="A11yHidden">닫기</span>
          <span className={styles.line01}></span>
          <span className={styles.line02}></span>
        </button>
      </div>
    </>
  );
}
