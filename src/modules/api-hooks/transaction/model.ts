export class Detail {
  id: string;
  name: string;
  price: string;
  qty: number;
  file_name: string;
  path: string;
}
export class Transaction {
  id: string;
  total: string;
  status: string;
  details: Detail[];
  store: string;
}
export class TransactionLiteModel {
  data: Transaction[];
}
