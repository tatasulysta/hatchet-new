import { Button, Chip, Grid, Typography } from '@mui/joy';
import { string2moneyDefault } from 'common/helpers/format';
import { queryClient } from 'common/helpers/query-client';
import { useCancelTransaction } from 'modules/api-hooks/transaction';
import { Transaction as TransactionModel } from 'modules/api-hooks/transaction/model';
import Separator from 'modules/components/common/separator';
import { color } from 'modules/styles/colors';
import { moduleStyles } from 'modules/styles/module.css';
import React from 'react';
import { toast } from 'react-toastify';

import TransactionItem from './item';
import { StatusEnum } from '../..';

export default function Transaction(props: TransactionModel) {
  const { details, id, status, store } = props;

  const { mutateAsync } = useCancelTransaction();

  const handleCancel = React.useCallback(async () => {
    try {
      await mutateAsync(id as any);
      await queryClient.refetchQueries(['transactions']);
      toast?.success('sucessfuly cancel', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e) {
      toast.error(e.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [id, mutateAsync]);

  const chip = React.useMemo(() => {
    switch (status.toLowerCase()) {
      case StatusEnum.created:
        return {
          title: 'Waiting For Confirmation',
          color: 'neutral',
        };
      case StatusEnum.rejected:
        return {
          title: 'Rejected',
          color: 'warning',
        };
      case StatusEnum.packaged:
        return {
          title: 'Packaged',
          color: 'info',
        };
      case StatusEnum.canceled:
        return {
          title: 'Canceled',
          color: 'danger',
        };

      default: {
        return {
          title: 'Completed',
          color: 'success',
        };
      }
    }
  }, [status]);

  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        padding: '16px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
      }}
    >
      <Grid
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="bottom"
      >
        <Typography level="body2" fontWeight="lg">
          {store}
        </Typography>
        <div>
          <Chip variant="outlined" color={chip.color as any}>
            {chip.title}
          </Chip>
        </div>
      </Grid>
      <Grid xs={12}>
        <Separator gap={15} direction="vertical">
          <div className={moduleStyles.dividerSm} />
        </Separator>
      </Grid>

      {details.map((item) => (
        <Grid xs={12}>
          <Separator gap={8} direction="vertical">
            <TransactionItem {...item} />
          </Separator>
        </Grid>
      ))}
      <Grid xs={12}>
        <Separator gap={30} direction="vertical" />
        <div className={moduleStyles.dividerSm} />
      </Grid>
      <Separator gap={20} />
      <Grid
        xs={12}
        display="flex"
        justifyContent="space-between"
        sx={{ flexGrow: 1 }}
      >
        {status.toLowerCase() === StatusEnum.created ? (
          <Button type="button" onClick={handleCancel} sx={{ minWidth: 120 }}>
            Cancel
          </Button>
        ) : (
          <div />
        )}
        <div>
          <Typography fontWeight="lg" fontSize={20}>
            Total:{' '}
            <span
              style={{
                color: color.info1,
              }}
            >
              Rp.{' '}
              {string2moneyDefault(
                Number(
                  details
                    .map((item) => Number(item.price) * item.qty)
                    .reduce((i, j) => i + j),
                ),
              )}
            </span>
          </Typography>
        </div>
      </Grid>
      <Separator gap={20} direction="vertical" />
    </Grid>
  );
}
