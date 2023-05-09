import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import _ from 'lodash';

import { ProductLite, ProductModel } from './model';
import { httpClient, httpClientWithBearer } from '../config';

type getProductsType = {
  data: ProductLite[];
  status: number;
};
type getProductType = {
  data: ProductModel;
  status: number;
};

export const useGetProducts = (q, options?: UseQueryOptions) => {
  return useQuery<any, AxiosError<Error>, getProductsType>({
    queryKey: ['products', q],
    queryFn: async () => {
      const res = await httpClient.get(`/api/products?q=${q}`);
      const temp = {
        ...res,
        data: res.data.data.map((item) =>
          _.mapKeys(item, (value, key) => _.camelCase(key)),
        ),
      };
      return temp;
    },
  });
};

export const useGetProduct = (id: string, options?: UseQueryOptions) => {
  return useQuery<any, AxiosError, getProductType>({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await httpClientWithBearer.get(`/api/products/${id}`);
      const temp = {
        ...res,
        data: _.mapKeys(res.data.data, (value, key) => _.camelCase(key)),
      };
      return temp;
    },
  });
};
