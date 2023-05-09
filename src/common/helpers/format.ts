import numeral from 'numeral';

export const formatDateTime = (time: string) =>
  new Date(time).toISOString().split('T')[0];
export const formatCurrency = (price: number) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(
    price,
  );

export function string2moneyDefault(value: string | number): string {
  const countDecimal = String(value).split('.')[1]?.length || 0;
  const fixed = '0'.repeat(countDecimal);
  return numeral(`${value}`).format(`0,0.${fixed}`);
}
