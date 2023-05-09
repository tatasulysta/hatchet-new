import { Button, Typography } from '@mui/joy';
import { string2moneyDefault } from 'common/helpers/format';
import Separator from 'modules/components/common/separator';
import { moduleStyles } from 'modules/styles/module.css';
import React from 'react';

import { cartsStyle } from '../styles.css';

export default function CartTotal({
  total,
  disabled,
}: {
  total: number;
  disabled?: boolean;
}) {
  return (
    <div className={cartsStyle.summaryContainer}>
      <div className={cartsStyle.summaryHeader}>
        <Typography level="body3" textColor="common.white" textAlign="center">
          Cart Total
        </Typography>
      </div>
      <Separator gap={16} direction="vertical" />

      <div className={cartsStyle.summaryContainerContent}>
        <div className={moduleStyles.spaceBetween}>
          <Typography level="body3" textColor="common.black">
            Subtotal
          </Typography>
          <Typography level="body3" textColor="common.black">
            Rp. {string2moneyDefault(total)}
          </Typography>
        </div>
        <Separator gap={16} direction="vertical" />
        <div className={moduleStyles.dividerSm} />
        <Separator gap={16} direction="vertical" />

        <div className={moduleStyles.spaceBetween}>
          <Typography
            level="body4"
            textColor="common.black"
            className={cartsStyle.weight400}
          >
            Total Amount
          </Typography>
          <Typography
            level="body4"
            textColor="common.black"
            className={cartsStyle.weight400}
          >
            Rp. {string2moneyDefault(total)}
          </Typography>
        </div>
        <Separator gap={24} direction="vertical" />
        <Button
          type="submit"
          className={cartsStyle.button}
          disabled={!disabled}
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}
