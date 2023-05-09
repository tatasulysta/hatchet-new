import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { httpClientWithBearer } from '../config';

type getMe = {
  data: {
    email: string;
    phone_number: string;
    id: string;
  };
};

export const useGetMe = (options?: UseQueryOptions) => {
  return useQuery<any, AxiosError<Error>, getMe>({
    queryKey: ['me'],
    queryFn: async () => {
      const res = await httpClientWithBearer.get('/api/me');
      const temp = {
        ...res,
        data: res.data.data,
      };
      return temp;
    },
  });
};
