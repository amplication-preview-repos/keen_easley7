import { BuyerCreateNestedManyWithoutUsersInput } from "./BuyerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SellerCreateNestedManyWithoutUsersInput } from "./SellerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  buyers?: BuyerCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  sellers?: SellerCreateNestedManyWithoutUsersInput;
  username: string;
};
