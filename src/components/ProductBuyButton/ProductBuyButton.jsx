import React from 'react';
import '../../common.css';
import styles from './ProductBuyButton.module.css';
import logoIcon from '../../assets/logo_primary.svg';
import logoIconDisabled from '../../assets/logo_disabled.svg';

export function ProductBuyButton({ count, isDisabled = false }) {
  // let isDisabled = !count ? 'disabled' : '';
  // console.log(isDisabled);

  return (
    <>
      <button
        type="submit"
        className={`
        ${styles.buyButton} 
        marginTop 
        whiteColor 
        fontSize14
        fontWeight700
        `}
        disabled={count == 0 ? !isDisabled : false}
      >
        {count == 0 ? (
          <img src={logoIconDisabled} alt="네이버 회색 로고" />
        ) : (
          <img src={logoIcon} alt="네이버 로고" />
        )}
        구매하기
      </button>
    </>
  );
}
