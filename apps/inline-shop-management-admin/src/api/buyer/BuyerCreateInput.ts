import { OrderCreateNestedManyWithoutBuyersInput } from "./OrderCreateNestedManyWithoutBuyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuyerCreateInput = {
  orders?: OrderCreateNestedManyWithoutBuyersInput;
  user?: UserWhereUniqueInput | null;
};
