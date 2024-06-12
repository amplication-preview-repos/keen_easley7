import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  quantity?: number | null;
  seller?: SellerWhereUniqueInput | null;
};
