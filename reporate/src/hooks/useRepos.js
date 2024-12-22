import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';

const useRepos = () => {
  const { data, loading, refetch } = useQuery(GET_REPOS, { fetchPolicy: 'cache-and-network' });
  const repos = data
    ? data.repositories.edges.map((e) => e.node)
    : [];

  return { repos, loading, refetch };
};

export default useRepos;
