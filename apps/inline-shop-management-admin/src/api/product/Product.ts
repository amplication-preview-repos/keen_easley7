import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Seller } from "../seller/Seller";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  quantity: number | null;
  seller?: Seller | null;
  updatedAt: Date;
};
