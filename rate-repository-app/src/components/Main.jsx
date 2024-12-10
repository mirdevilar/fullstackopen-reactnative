import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import theme from '../theme';
import Nav from './Nav';

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
      <RepositoryList />
    </View>
  );
};

export default Main;
