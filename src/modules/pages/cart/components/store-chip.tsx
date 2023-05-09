import { Typography } from '@mui/joy';
import Separator from 'modules/components/common/separator';
import StoreIcon from 'modules/pages/product-detail/components/store-icon';
import { moduleStyles } from 'modules/styles/module.css';
import React from 'react';

export default function StoreChip({ name }) {
  return (
    <div className={moduleStyles.flexCenter}>
      <StoreIcon color="#000" size={40} />
      <Separator gap={12} />
      <Typography level="body2" textColor="primary.100" fontWeight="lg">
        {name}
      </Typography>
    </div>
  );
}
