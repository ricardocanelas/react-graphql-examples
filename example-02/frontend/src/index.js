import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';

const API_BASE_URL = 'http://localhost:4000/graphql';

const httpLink = new HttpLink({
   uri: API_BASE_URL,
});

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

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
   link: link,
   cache,
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>,
   document.getElementById('root'));