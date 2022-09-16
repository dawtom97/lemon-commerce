import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://185.200.44.108/graphql',
  credentials: 'include'
});

const authLink = setContext((request,previousContext) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...previousContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const apolloClient = new ApolloClient({
    uri: 'http://185.200.44.108/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    
});
