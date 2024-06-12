import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BUYER_TITLE_FIELD } from "../buyer/BuyerTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Buyer" source="buyer.id" reference="Buyer">
          <TextField source={BUYER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <TextField label="totalPrice" source="totalPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
