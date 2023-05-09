import { Grid, Typography } from '@mui/joy';
import { string2moneyDefault } from 'common/helpers/format';
import { queryClient } from 'common/helpers/query-client';
import { CloseCircle } from 'iconsax-react';
import {
  CartModelType,
  useDeleteCart,
  useUpdateQuantity,
} from 'modules/api-hooks/cart';
import LoaderSmall from 'modules/components/common/loader/small';
import Separator from 'modules/components/common/separator';
import QuantityInput from 'modules/pages/product-detail/components';
import { moduleStyles } from 'modules/styles/module.css';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';

import { cartsStyle } from '../styles.css';

interface Props extends CartModelType {
  isLast: boolean;

  filtered: string[];
}
export default function Item(props: Props) {
  const [quantity, setQuantity] = React.useState<number>(
    Number(props?.qty || 0),
  );
  const { mutateAsync, isLoading } = useUpdateQuantity();
  const { mutateAsync: deleteMutateAsync } = useDeleteCart();

  React.useEffect(() => {
    setQuantity(Number(props?.qty));
  }, [props?.qty]);

  const onHandleUpdateQuantity = useDebouncedCallback(async () => {
    try {
      const res = await mutateAsync({
        id: props?.id,
        qty: quantity,
        product_id: props?.product_id,
      } as any);

      await queryClient.refetchQueries(['carts']);
      toast.success((res as any)?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e: any) {
      toast.error(e?.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, 1000);

  const onHandleDeleteCart = React.useCallback(async () => {
    try {
      const res = await deleteMutateAsync({} as any);

      toast.success((res as any)?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e: any) {
      toast.error(e?.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [deleteMutateAsync]);

  return (
    <>
      <Grid xs={2} display="flex" alignItems="center">
        <div className={cartsStyle.imageContainer}>
          <Image
            src={props?.file_name || ''}
            layout="fill"
            alt={props?.path || ''}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Grid>
      <Grid xs={2} display="flex" alignItems="center">
        <Typography level="body2" textColor="primary.100" fontWeight="lg">
          {props?.product_name}
        </Typography>
      </Grid>
      <Grid xs={2} display="flex" alignItems="center">
        <Typography level="body3" fontWeight="lg">
          Rp. {string2moneyDefault(Number(props?.price))}
        </Typography>
      </Grid>
      <Grid xs={2} display="flex" alignItems="center">
        <QuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          maxValue={10000000}
          onAfterChange={() => onHandleUpdateQuantity()}
          disabled={isLoading}
        />
      </Grid>

      <Grid xs={2} display="flex" alignItems="center">
        <Typography level="body3" fontWeight="lg">
          Rp. {string2moneyDefault(Number(props?.price) * quantity)}
        </Typography>
      </Grid>
      <Grid xs={1} display="flex" alignItems="center">
        {isLoading ? (
          <LoaderSmall />
        ) : (
          <CloseCircle
            className={moduleStyles.pointer}
            onClick={onHandleDeleteCart}
          />
        )}
      </Grid>

      <Grid xs={12}>
        <Separator gap={20} />

        {props?.isLast ? (
          <div className={moduleStyles.dividerXl} />
        ) : (
          <div className={moduleStyles.dividerSm} />
        )}
      </Grid>
    </>
  );
}
