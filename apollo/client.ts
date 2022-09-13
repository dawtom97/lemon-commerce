import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'http://185.200.44.108/graphql',
    cache: new InMemoryCache(),
});
