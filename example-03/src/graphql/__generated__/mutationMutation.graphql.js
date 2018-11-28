/**
 * @flow
 * @relayHash 640fc072490d5585e0da17c4493b1bad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type mutationMutationVariables = {|
  name: string,
  price?: ?string,
|};
export type mutationMutationResponse = {|
  +createProduct: ?{|
    +id: ?string
  |}
|};
export type mutationMutation = {|
  variables: mutationMutationVariables,
  response: mutationMutationResponse,
|};
*/


/*
mutation mutationMutation(
  $name: String!
  $price: String
) {
  createProduct(name: $name, price: $price) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "price",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "price",
        "variableName": "price",
        "type": "String"
      }
    ],
    "concreteType": "Product",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "mutationMutation",
  "id": null,
  "text": "mutation mutationMutation(\n  $name: String!\n  $price: String\n) {\n  createProduct(name: $name, price: $price) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "mutationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "mutationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3fa23485df0fc1c1179b43bb98d2b07';
module.exports = node;
