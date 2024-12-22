import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../../theme';
import useRepos from '../../hooks/useRepos';

const styles = StyleSheet.create({
  separator: {
    height: theme.separations.secondary,
  },
});

function ItemSeparator() {
  return <View style={styles.separator} />;
}

function RepositoryList() {
  const { repos } = useRepos();

  return (
    <FlatList
      style={{ paddingHorizontal: theme.separations.primary }}
      data={repos}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default RepositoryList;
