import { BuyerListRelationFilter } from "../buyer/BuyerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SellerListRelationFilter } from "../seller/SellerListRelationFilter";

export type UserWhereInput = {
  buyers?: BuyerListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  sellers?: SellerListRelationFilter;
  username?: StringFilter;
};
