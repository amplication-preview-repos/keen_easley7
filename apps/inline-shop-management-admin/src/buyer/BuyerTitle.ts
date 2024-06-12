import { Buyer as TBuyer } from "../api/buyer/Buyer";

export const BUYER_TITLE_FIELD = "id";

export const BuyerTitle = (record: TBuyer): string => {
  return record.id?.toString() || String(record.id);
};
