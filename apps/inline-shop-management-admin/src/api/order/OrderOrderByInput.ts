import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  buyerId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
