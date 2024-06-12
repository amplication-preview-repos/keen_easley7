import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  buyer?: BuyerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
