import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, ApolloCache} from "@apollo/client";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:9000/graphql"
})

ReactDOM.render(
  <ApolloProvider client={client}>

    <App />
    </ApolloProvider>
,
  document.getElementById('root')
);

