import { StyleSheet } from 'react-native';
import { Link, useMatch } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const ss = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.bgContent,
    paddingVertical: 6,
    paddingHorizontal: theme.paddings.primary,
    marginRight: theme.separations.secondary,
    borderRadius: theme.paddings.primary,
  },
  selected: {
    backgroundColor: theme.colors.bgAccent,
  },
});

const Selector = ({ label, onPress, route }) => {
  const match = useMatch(route);

  const styles = [
    ss.default,
    match && ss.selected,
  ];

  return (
    <Link
      to={route}
      underlayColor="none"
      style={styles}
      onPress={onPress}
    >
      <Text b>{label}</Text>
    </Link>
  );
};

export default Selector;
