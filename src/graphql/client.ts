/** Configuración de Apollo Client para consumir la API GraphQL. */
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient(
{
 uri: 'https://countries.trevorblades.com',
 cache: new InMemoryCache()
});
