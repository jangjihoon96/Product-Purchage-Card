import React, { useState } from 'react';
import '../../common.css';
import styles from './ProductCountButton.module.css';

export function ProductCountButton({ count, setCount }) {
  const handlerMinusCount = () => {
    return count > 0 ? setCount(--count) : 0;
  };
  const handlerPlusCount = () => {
    return setCount(++count);
  };

  return (
    <>
      <div className="lineSection marginTop">
        <div className={`${styles.countWrap}`}>
          <button
            type="button"
            className={styles.countButton}
            onClick={() => {
              handlerMinusCount();
            }}
            disabled={count == 0 ? true : false}
          >
            -
          </button>
          <label htmlFor="count" className={`A11yHidden`}>
            수량
          </label>
          <input
            type="text"
            value={count}
            tabIndex="-1"
            readOnly
            className={`${styles.countInput} gray400Color fontSize16 textAlignCenter`}
          />
          <button
            type="button"
            className={styles.countButton}
            onClick={() => {
              handlerPlusCount();
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
