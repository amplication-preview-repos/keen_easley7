import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
};
