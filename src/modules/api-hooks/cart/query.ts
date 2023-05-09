import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CartModel } from './model';
import { httpClientWithBearer } from '../config';

type getCarts = {
  data: CartModel[];
};

export const useGetCarts = (options?: UseQueryOptions) => {
  return useQuery<any, AxiosError<Error>, getCarts>({
    queryKey: ['carts'],
    queryFn: async () => {
      const res = await httpClientWithBearer.get('/api/carts');
      const temp = {
        ...res,
        data: res.data.data,
      };
      return temp;
    },
  });
};

export function getCarts() {
  return ['carts'];
}
