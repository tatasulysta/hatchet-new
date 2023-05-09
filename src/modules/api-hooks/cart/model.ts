export class CartInput {
  body: {
    product_id: string;
    qty: number;
  };
}

export class CartUpdateInput {
  id: string;
  qty: number;
}

export class CartModelType {
  id: string;
  product_id: string;
  product_name: string;
  file_name: string;
  path: string;
  price: string;
  qty: string;
}
export class CartModel {
  id: string;
  name: string;
  carts: CartModelType[];
}
