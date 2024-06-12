import { Order } from "../order/Order";
import { User } from "../user/User";

export type Buyer = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
  user?: User | null;
};
