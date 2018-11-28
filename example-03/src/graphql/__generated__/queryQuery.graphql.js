/**
 * @flow
 * @relayHash 378d1d4e3b0af87488cd6e04249ee655
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queryQueryVariables = {||};
export type queryQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +price: ?number,
  |}>
|};
export type queryQuery = {|
  variables: queryQueryVariables,
  response: queryQueryResponse,
|};
*/


/*
query queryQuery {
  products {
    id
    name
    price
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "products",
    "storageKey": null,
    "args": null,
    "concreteType": "Product",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "price",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "queryQuery",
  "id": null,
  "text": "query queryQuery {\n  products {\n    id\n    name\n    price\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "queryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "queryQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d766aff146e4f122c101e347997d32f';
module.exports = node;
