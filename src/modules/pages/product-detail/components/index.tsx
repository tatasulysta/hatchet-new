import { Typography } from '@mui/joy';
import classNames from 'classnames';
import { moduleStyles } from 'modules/styles/module.css';
import React from 'react';

import { productDetailStyle } from '../styles.css';
interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  maxValue: number;
  onAfterChange?: () => void;
  disabled?: boolean;
}
export default function QuantityInput(props: Props) {
  const { quantity, setQuantity, maxValue, disabled } = props;
  return (
    <div
      className={classNames(
        moduleStyles.flexCenter,
        productDetailStyle.quantityInputContainer,
      )}
    >
      <button
        onClick={() => {
          setQuantity((prev) => prev - 1);
          props?.onAfterChange?.();
        }}
        type="button"
        disabled={disabled || quantity === 0}
        className={productDetailStyle.quantityInputButton}
      >
        <Typography level="body3" fontWeight="md" textColor="common.black">
          -
        </Typography>
      </button>
      <div className={productDetailStyle.quantityInputText}>
        <Typography level="body3" fontWeight="md" textColor="common.black">
          {quantity}
        </Typography>
      </div>
      <button
        onClick={() => {
          setQuantity((prev) => prev + 1);
          props?.onAfterChange?.();
        }}
        type="button"
        className={productDetailStyle.quantityInputButton}
        disabled={disabled || maxValue === quantity}
      >
        <Typography level="body3" fontWeight="md" textColor="common.black">
          +
        </Typography>
      </button>
    </div>
  );
}
