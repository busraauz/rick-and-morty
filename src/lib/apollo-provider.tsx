'use client';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

const ApolloProviderComponent = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComponent;