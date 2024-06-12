import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuyerWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  user?: UserWhereUniqueInput;
};
