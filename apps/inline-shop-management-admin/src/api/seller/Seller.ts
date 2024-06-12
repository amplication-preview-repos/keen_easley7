import { Product } from "../product/Product";
import { User } from "../user/User";

export type Seller = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
  user?: User | null;
};
