import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities'

const API_BASE_URL = 'http://localhost:4000/graphql';

const httpLink = new HttpLink({
   uri: API_BASE_URL,
});

const wsLink = new WebSocketLink({
   uri: `ws://localhost:4000/subscriptions`,
   options: {
      reconnect: true,
   },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      console.error(graphQLErrors[0].message);
      // do something with graphql error
   }

   if (networkError) {
      console.error(networkError);
      // do something with network error
   }
});

const terminatingLink = split(
   ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return (
         kind === 'OperationDefinition' && operation === 'subscription'
      );
   },
   wsLink,
   httpLink,
);

const link = ApolloLink.from([errorLink, terminatingLink]);

const client = new ApolloClient({
   link: link,
   cache: new InMemoryCache(),
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>,
   document.getElementById('root'));