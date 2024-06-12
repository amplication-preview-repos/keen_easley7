import { BuyerUpdateManyWithoutUsersInput } from "./BuyerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SellerUpdateManyWithoutUsersInput } from "./SellerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  buyers?: BuyerUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  sellers?: SellerUpdateManyWithoutUsersInput;
  username?: string;
};
