import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

export const CREATE_PRODUCT = graphql`
    mutation mutationMutation($name:String!, $price: String) {
        createProduct(name: $name price: $price) {
            id
        }
    }
`

function commit(
    environment,
    variables,
    onCompleted
  ) {
    // See more options in
    // https://facebook.github.io/relay/docs/en/mutations.html
    return commitMutation(
      environment,
      {
        mutation: CREATE_PRODUCT,
        variables,
        onCompleted
      }
    );
}

export const CREATE_PRODUCT_commit = commit;
