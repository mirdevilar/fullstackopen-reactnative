import { useState, useEffect } from 'react';

const useRepos = () => {
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    const response = await fetch('http://192.168.68.111:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepos(json);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return { repos, loading, refetch: fetchRepos };
};

export default useRepos;
