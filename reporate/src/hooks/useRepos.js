import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';

const useRepos = () => {
  const { data, loading, refetch } = useQuery(GET_REPOS, { fetchPolicy: 'cache-and-network' });

  return { repos: data?.repositories, loading, refetch };
};

export default useRepos;
