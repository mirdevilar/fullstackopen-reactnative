import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import Card from './Card';
import Subheading from './Subheading';
import StatCounter from './StatCounter';
import theme from '../theme';

const ss = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.separations.primary,
    marginBottom: theme.separations.primary,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  text: {
    flex: 1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <Card>
      <View style={ss.main}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={ss.avatar}
        />
        <View style={ss.text}>
          <Subheading>{item.fullName}</Subheading>
          <Text>{item.description}</Text>
          <Text i>{item.language}</Text>
        </View>
      </View>
      <Card type="secondary" flex="h" style={{ justifyContent: 'space-between' }}>
        <StatCounter label="Stars" value={item.stargazersCount} />
        <StatCounter label="Forks" value={item.forksCount} />
        <StatCounter label="Reviews" value={item.reviewCount} />
        <StatCounter label="Rating" value={item.ratingAverage} />
      </Card>
    </Card>
  );
};

export default RepositoryItem;
