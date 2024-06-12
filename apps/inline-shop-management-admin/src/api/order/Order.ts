import { Buyer } from "../buyer/Buyer";
import { Product } from "../product/Product";

export type Order = {
  buyer?: Buyer | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
