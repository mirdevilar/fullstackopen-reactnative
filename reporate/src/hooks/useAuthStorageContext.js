import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useAuthStorageContext = () => {
  const authStorage = useContext(AuthStorageContext);

  return authStorage;
};

export default useAuthStorageContext;
