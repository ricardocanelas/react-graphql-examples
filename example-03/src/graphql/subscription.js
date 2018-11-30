import { requestSubscription } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ConnectionHandler } from 'relay-runtime'

export const SUBSCRIPTION_PRODUCT_CREATED = graphql`
  subscription subscriptionSubscription {
    productCreated {
      message {
        id
        name
        price
      }
    }
  }
`;

export const SUBSCRIPTION_PRODUCT_CREATED_request = (env, variables) => {
  requestSubscription(
    env, // see Environment docs
    {
      subscription: SUBSCRIPTION_PRODUCT_CREATED,
      variables,

      onCompleted: (response) => {
        console.log("** onCompleted Subscription")

      },

      onError: error => {
        console.log("** onError Subscription");
        console.error(error)
      },

      updater: (proxyStore, data) => {
        // TODO
        console.log("\n\n-------UPDATER--------");

        console.log("\nData")
        console.log(data);

        const products = proxyStore.getRoot();
        console.log("\nProducts")
        console.log(products);

        // Use relay-store
        // https://facebook.github.io/relay/docs/en/relay-store.html

        console.log("\n-----------------------------------\n");
      }
    }
  );
}



// requestSubscription(
//   environment: Environment,
//   config: {
//     subscription: GraphQLTaggedNode,
//     variables: Variables,
//     onCompleted?: ?() => void,
//     onError?: ?(error: Error) => void,
//     onNext?: ?(response: ?Object) => void,
//     updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,
//     configs?: Array<DeclarativeMutationConfig>,
//   },
// )