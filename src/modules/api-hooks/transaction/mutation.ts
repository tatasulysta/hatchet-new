import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { httpClientWithBearer } from '../config';
import { Error } from '../model';

export const useAddTransactions = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['addTransactions'],
    mutationFn: async (body) =>
      await httpClientWithBearer.post('/api/transactions', body),
    ...options,
  });
};

export const useCancelTransaction = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['cancelTransaction'],
    mutationFn: async (id) =>
      await httpClientWithBearer.put(`/api/transactions/${id}/cancel`),
    ...options,
  });
};
