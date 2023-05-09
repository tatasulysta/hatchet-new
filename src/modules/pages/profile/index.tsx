import { Grid } from '@mui/joy';
import { useGetTransactions } from 'modules/api-hooks/transaction';
import DefaultLayout from 'modules/components/common/layout';
import Separator from 'modules/components/common/separator';
import React from 'react';

import Tabs from './components/tab';
import Transaction from './components/transaction';
import UserInfo from './components/user-info';

export enum StatusEnum {
  created = 'created',
  packaged = 'packaged',
  completed = 'completed',
  canceled = 'canceled',
  rejected = 'rejected',
}

export default function Profile() {
  const [status, setStatus] = React.useState<string>('');

  const { data, isFetching, refetch } = useGetTransactions(status);

  return (
    <DefaultLayout isAuth>
      <Grid
        container
        gap={5}
        columns={{ xs: 10, sm: 8, md: 8, lg: 12 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={2}>
          <UserInfo showEditProfile />
        </Grid>
        <Grid xs={8}>
          <Tabs
            tabs={[
              {
                title: 'All',
                onClick: () => setStatus(''),
              },
              {
                title: 'Waiting Confirmation',
                onClick: () => setStatus(StatusEnum.created),
              },
              {
                title: 'Packed',
                onClick: () => setStatus(StatusEnum.packaged),
              },
              {
                title: 'Done',
                onClick: () => setStatus(StatusEnum.completed),
              },
              {
                title: 'Cancelled',
                onClick: () => setStatus(StatusEnum.canceled),
              },
              {
                title: 'Rejected',
                onClick: () => setStatus(StatusEnum.rejected),
              },
            ]}
          />
          <Separator gap={30} direction="vertical" />

          {isFetching
            ? 'loading...'
            : !data?.data.length
            ? 'No Data here...'
            : data?.data.map((item) => (
                <>
                  <Transaction {...item} />
                  <Separator gap={30} direction="vertical" />
                </>
              ))}
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}
