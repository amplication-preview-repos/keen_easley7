import { OrderUpdateManyWithoutBuyersInput } from "./OrderUpdateManyWithoutBuyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuyerUpdateInput = {
  orders?: OrderUpdateManyWithoutBuyersInput;
  user?: UserWhereUniqueInput | null;
};
