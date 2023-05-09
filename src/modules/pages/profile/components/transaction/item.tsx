import { Grid, Typography } from '@mui/joy';
import { string2moneyDefault } from 'common/helpers/format';
import { Detail } from 'modules/api-hooks/transaction/model';
import { cartsStyle } from 'modules/pages/cart/styles.css';
import { color } from 'modules/styles/colors';
import Image from 'next/image';
import React from 'react';

interface Props extends Detail {}
export default function TransactionItem(props: Props) {
  const { file_name, path, name, qty, price } = props;
  return (
    <Grid container display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
      <Grid xs={2} display="flex" alignItems="center">
        <div className={cartsStyle.imageContainer}>
          <Image
            src={file_name || ''}
            layout="fill"
            alt={path || ''}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Grid>
      <Grid xs={2}>
        <Typography level="body2" textColor="info.100" fontWeight="lg">
          {name}
        </Typography>
        <Typography level="body2" textColor="primary.100" fontWeight="lg">
          {qty}
        </Typography>
      </Grid>
      <Grid
        xs={2}
        sx={{ flexGrow: 1 }}
        display="flex"
        justifyContent="flex-end"
      >
        <Typography level="body3" textColor="neutral.500" fontWeight="lg">
          Rp.{string2moneyDefault(Number(price) * qty)}
        </Typography>
      </Grid>
    </Grid>
  );
}
