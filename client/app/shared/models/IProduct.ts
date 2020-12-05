export class IProductResponse {
  products: IProduct[] = [];
  timestamps: Date;
}

export interface IVariant {
  color: string;
  size: string[];
  quantity: number;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  available: boolean;
  variants: IVariant[];
  createdAt: Date;
  updatedAt: Date;
}
