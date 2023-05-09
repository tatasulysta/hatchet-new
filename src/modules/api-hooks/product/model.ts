export class ProductLite {
  id: string;
  name: string;
  price: string;
  fileName: string;
  path: string;
  unit: string;
}

export type Images = {
  order: number;
  path: string;
  url: string;
};

export type Store = {
  id: string;
  name: string;
  address: string;
};

export interface ProductLiteModel extends Omit<ProductLite, 'fileName'> {
  file_name: string;
}

export class ProductModel {
  id: string;
  name: string;
  description: string;
  category: string;
  stock: number;
  store: Store;
  images: Images[];
  relatedProduct: ProductLiteModel[];
  unit: string;
  price: string;
  minQty?: number;
}
