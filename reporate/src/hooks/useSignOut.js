import { useApolloClient } from '@apollo/client';
import useAuthStorageContext from './useAuthStorageContext';

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorageContext();

  // all actions to perform on sign out
  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return signOut;
};

export default useSignOut;
