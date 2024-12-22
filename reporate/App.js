import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

import { StatusBar } from 'expo-status-bar';
import createApolloClient from './src/utils/apolloClient';

import Main from './src/components/Main';

const apolloClient = createApolloClient();

function App() {
  console.log(Constants.expoConfig);

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
