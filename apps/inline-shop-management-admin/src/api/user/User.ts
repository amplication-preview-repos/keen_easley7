import { Buyer } from "../buyer/Buyer";
import { JsonValue } from "type-fest";
import { Seller } from "../seller/Seller";

export type User = {
  buyers?: Array<Buyer>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  sellers?: Array<Seller>;
  updatedAt: Date;
  username: string;
};
