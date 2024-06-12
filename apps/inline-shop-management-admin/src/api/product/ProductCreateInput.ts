import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  quantity?: number | null;
  seller?: SellerWhereUniqueInput | null;
};
