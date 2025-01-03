import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useUser = () => {
  const { data, loading, refetch } = useQuery(ME, { fetchPolicy: 'cache-and-network' });
  // set user if loading is complete, data was returned and it contains a user, else null
  const user = !loading && data && data.me
    ? data.me
    : null;

  return { user, data, loading, refetch };
};

export default useUser;
