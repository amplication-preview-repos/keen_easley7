import { ProductUpdateManyWithoutSellersInput } from "./ProductUpdateManyWithoutSellersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SellerUpdateInput = {
  products?: ProductUpdateManyWithoutSellersInput;
  user?: UserWhereUniqueInput | null;
};
