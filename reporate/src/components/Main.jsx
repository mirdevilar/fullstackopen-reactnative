import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';

import Nav from './Nav';
import RepositoryList from './RepositoryList';
import SignInPage from './SignInPage';
import theme from '../theme';

const styles = StyleSheet.create({
  body: {
    backgroundColor: theme.colors.bgBody,
    paddingHorizontal: 0,
    text: theme.colors.textPrimary,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={[styles.container, styles.body]}>
      <Nav />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="signin" element={<SignInPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
