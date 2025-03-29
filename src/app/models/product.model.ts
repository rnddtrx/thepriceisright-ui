export interface Product {
  productId: number;
  brand: string;
  name: string;
  description: string | null;
  eanCode: string;
  lastUpdated: string;
  nudgerUrl: string;
}
