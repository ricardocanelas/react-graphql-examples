/**
 * @flow
 * @relayHash 266fd0ddb7b81ae6f3990fcfcdcc7a76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type subscriptionSubscriptionVariables = {||};
export type subscriptionSubscriptionResponse = {|
  +productCreated: {|
    +message: {|
      +id: ?string,
      +name: ?string,
      +price: ?number,
    |}
  |}
|};
export type subscriptionSubscription = {|
  variables: subscriptionSubscriptionVariables,
  response: subscriptionSubscriptionResponse,
|};
*/


/*
subscription subscriptionSubscription {
  productCreated {
    message {
      id
      name
      price
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "productCreated",
    "storageKey": null,
    "args": null,
    "concreteType": "ProductMessage",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "message",
        "storageKey": null,
        "args": null,
        "concreteType": "Product",
        "plural": false,
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
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "subscriptionSubscription",
  "id": null,
  "text": "subscription subscriptionSubscription {\n  productCreated {\n    message {\n      id\n      name\n      price\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subscriptionSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "subscriptionSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '789c28ada8c610165cf8d53341de89e3';
module.exports = node;
