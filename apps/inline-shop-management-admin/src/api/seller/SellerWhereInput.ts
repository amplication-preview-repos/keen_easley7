import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SellerWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  user?: UserWhereUniqueInput;
};
