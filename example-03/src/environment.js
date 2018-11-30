import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

// import { SubscriptionClient } from 'subscriptions-transport-ws'

const endpoint = 'http://localhost:4000/graphql'

/*
// SUBSCRIPTION
const websocketUrl = 'ws://localhost:4000/subscriptions'
const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const subscriptionClient = new SubscriptionClient(websocketUrl, { reconnect: true })

  const onNext = (result) => {
    console.log("onNext", result);
    observer.onNext(result)
  }

  const onError = (error) => {
    console.log("onError", error);
    observer.onError(error)
  }

  const onComplete = () => {
    console.log("onComplete");
    observer.onCompleted()
  }

  const client = subscriptionClient.request({ query, variables }).subscribe(
    onNext,
    onError,
    onComplete
  )

  // client.unsubscribe()
}
*/



function fetchQuery(
  operation,
  variables,
) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  // network: Network.create(fetchQuery, setupSubscription), // subscription
  store: new Store(new RecordSource()),
});

export default environment;