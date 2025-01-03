import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const res = await mutate({ variables: { username, password } });
    return res;
  };

  return [signIn, result];
};

export default useSignIn;
