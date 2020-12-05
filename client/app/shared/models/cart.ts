export interface ICartItem {
  id: number;
  productId: string;
  productName: string;
  variantColor: string;
  variantSize: string;
  productPrice: number;
  quantity: number;
}

export interface ICartResponse {
  cartItems: ICartItem[];
  timestamps: Date;
}
