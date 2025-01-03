import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import { StatusBar } from 'expo-status-bar';
import createApolloClient from './src/utils/apolloClient';

import Main from './src/components/Main';
import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
