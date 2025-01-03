import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorageContext from './useAuthStorageContext';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorageContext();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const res = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(res.data.authenticate.accessToken);
    apolloClient.resetStore();
    return res;
  };

  return [signIn, result];
};

export default useSignIn;
