import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { httpClient, httpClientWithBearer } from '../config';

export const useLogin = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['auth'],
    mutationFn: async (body) => await httpClient.post('/api/login', body),
    ...options,
  });
};

export const useRegister = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['register'],
    mutationFn: async (body) => await httpClient.post('/api/register', body),
    ...options,
  });
};

export const useEditProfile = (options?: UseMutationOptions) => {
  return useMutation<any, AxiosError<Error>>({
    mutationKey: ['editProfile'],
    mutationFn: async (body) =>
      await httpClientWithBearer.put('/api/me/update', body),
    ...options,
  });
};
