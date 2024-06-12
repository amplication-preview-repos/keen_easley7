import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  buyer?: BuyerWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
