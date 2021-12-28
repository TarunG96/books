import React from 'react';
import { render } from 'react-dom';
import App from './../components/App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});


render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.body.appendChild(document.createElement('div')),
);