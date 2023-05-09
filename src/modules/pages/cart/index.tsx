import { Button, Grid } from '@mui/joy';
import { queryClient } from 'common/helpers/query-client';
import useYupValidationResolver from 'common/hooks/use-yup-validation-resolver';
import { useGetCarts } from 'modules/api-hooks/cart/query';
import { useAddTransactions } from 'modules/api-hooks/transaction';
import Form from 'modules/components/common/form/form';
import Input from 'modules/components/common/input';
import DefaultLayout from 'modules/components/common/layout';
import Loader from 'modules/components/common/loader';
import Separator from 'modules/components/common/separator';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import CartTotal from './components/cart-total';
import EmptyView from './components/empty-view';
import Item from './components/item';
import StoreChip from './components/store-chip';

export default function Cart() {
  const { data, isFetching } = useGetCarts();
  const { mutateAsync } = useAddTransactions();

  const [activeKey, setActiveKey] = React.useState<string[]>([]);
  const resolver = useYupValidationResolver(Yup.object().shape({}));

  const intialValues = React.useMemo<any>(() => {
    return {
      carts: [],
    };
  }, []);

  const methods = useForm<any>({
    resolver,
    mode: 'onChange',
    defaultValues: intialValues,
  });
  const router = useRouter();
  const onSubmit = React.useCallback(
    async (values) => {
      try {
        const input = Object.keys(values.carts).map((item) => {
          return {
            id: item,
            carts: (values.carts[item] as any[])
              .filter((cart) => cart.id)
              .map((item) => item.id),
          };
        });

        const res = await mutateAsync({
          stores: input.filter((item) => item.carts.length > 0),
        } as any);

        toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT });
        queryClient.refetchQueries(['transactions']);
        queryClient.refetchQueries(['carts']);
      } catch (e) {
        toast.error(e.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    [mutateAsync],
  );

  const filtered = React.useMemo(() => {
    return Object.entries(methods.getValues('carts'))
      .map((item) => item[1])
      .flat(1)
      .filter((item) => (item as any).value === true)
      .map((item) => (item as any).id);
  }, [methods]);

  const products = React.useMemo(() => {
    return data?.data?.map((item) => item.carts).flat();
  }, [data?.data]);

  const total = React.useMemo(() => {
    return activeKey
      .map((id) => products?.filter((item) => item.id === id))
      .flat()
      .map((item) => Number(item?.price) * Number(item?.qty || 0))
      .reduce((curr, prev) => curr + prev, 0);
  }, [activeKey, products]);

  return (
    <DefaultLayout isAuth>
      <Form onSubmit={onSubmit} methods={methods}>
        {data?.data.length ? (
          data?.data?.map((carts, idx) => (
            <>
              {idx !== 0 && <Separator gap={32} />}
              <StoreChip name={carts.name} />
              <Grid container>
                {carts?.carts.length &&
                  carts?.carts?.map((item, index) => (
                    <>
                      <Grid xs={12}>
                        <Separator gap={20} />
                      </Grid>
                      <Grid xs={1} display="flex" alignItems="center">
                        <Input
                          type="checkbox"
                          name={`carts.${carts.id}.${index}.value`}
                          variant="solid"
                          onChange={(e) => {
                            methods.setValue(`carts.${carts.id}.${index}`, {
                              id: e.target.checked ? item.id : null,
                              value: e.target.checked,
                            });
                            setActiveKey((prev) => {
                              const arr = e.target.checked
                                ? [...prev, item.id]
                                : prev.filter((id) => id !== item.id);
                              return arr;
                            });
                          }}
                        />
                      </Grid>
                      <Item
                        {...item}
                        filtered={filtered}
                        isLast={index + 1 === carts?.carts.length}
                      />
                    </>
                  ))}
              </Grid>
            </>
          ))
        ) : (
          <>
            {isFetching ? (
              <Loader />
            ) : (
              <EmptyView isNotLogin={!localStorage.getItem('auth')} />
            )}
          </>
        )}
        <Separator gap={24} direction="vertical" />
        {!!data?.data.length && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Button
                onClick={() => router.push('/')}
                variant="plain"
                size="lg"
                type="button"
              >
                Continue Shopping
              </Button>
            </div>
            <CartTotal total={total} disabled={!!activeKey.length} />
          </div>
        )}
      </Form>
    </DefaultLayout>
  );
}
