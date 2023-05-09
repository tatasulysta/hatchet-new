import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { TransactionLiteModel } from './model';
import { httpClientWithBearer } from '../config';

export const useGetTransactions = (status) => {
  return useQuery<any, AxiosError<Error>, TransactionLiteModel>({
    queryKey: ['transactions', status],
    queryFn: async () => {
      const res = await httpClientWithBearer.get(
        `/api/transactions?filter[status]=${status}`,
      );
      const temp = {
        ...res,
        data: res.data.data,
      };
      return temp;
    },
  });
};

export function getTransactionsKey() {
  return ['transactions'];
}
