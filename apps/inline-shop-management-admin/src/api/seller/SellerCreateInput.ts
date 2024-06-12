import { ProductCreateNestedManyWithoutSellersInput } from "./ProductCreateNestedManyWithoutSellersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SellerCreateInput = {
  products?: ProductCreateNestedManyWithoutSellersInput;
  user?: UserWhereUniqueInput | null;
};
