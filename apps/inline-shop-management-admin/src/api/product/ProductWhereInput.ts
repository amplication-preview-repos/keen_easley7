import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  seller?: SellerWhereUniqueInput;
};
