import gql from "graphql-tag";

export const SUBSCRIPTION_PRODUCT_CREATED = gql`
  subscription {
    productCreated {
      message {
        id
        name
        price
      }
    }
  }
`;
