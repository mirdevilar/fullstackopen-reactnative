import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';

import RepositoryList from './RepositoryList';
import theme from '../theme';
import Nav from './Nav';
import SignIn from './SignIn';

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
        <Route path="signin" element={<SignIn />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
