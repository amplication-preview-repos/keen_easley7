import { Seller as TSeller } from "../api/seller/Seller";

export const SELLER_TITLE_FIELD = "id";

export const SellerTitle = (record: TSeller): string => {
  return record.id?.toString() || String(record.id);
};
