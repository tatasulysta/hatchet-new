import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { httpClientWithBearer } from '../config';

export const useAddCarts = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['addCarts'],
    mutationFn: async (body) =>
      await httpClientWithBearer.post('/api/carts', body),
    ...options,
  });
};

export const useUpdateQuantity = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['updateQuantity'],
    mutationFn: async (body: any) =>
      await httpClientWithBearer.put(`/api/carts/${body.id}`, body),
    ...options,
  });
};

export const useDeleteCart = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['deleteQuantity'],
    mutationFn: async (body: any) =>
      await httpClientWithBearer.delete(`/api/carts/${body.id}`),
    ...options,
  });
};
