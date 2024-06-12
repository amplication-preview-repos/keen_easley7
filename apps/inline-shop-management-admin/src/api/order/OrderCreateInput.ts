import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  buyer?: BuyerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
