import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const ss = StyleSheet.create({
  default: {
    fontWeight: theme.fontWeights.bold,
    backgroundColor: theme.colors.bgContent,
    paddingVertical: 6,
    paddingHorizontal: theme.paddings.primary,
    borderRadius: theme.paddings.primary,
  },
  selected: {
    backgroundColor: theme.colors.bgAccent,
  },
});

const Button = ({ state, label }) => {
  const styles = [
    ss.default,
    state === 'selected' && ss.selected,
  ];

  return (
    <Pressable style={styles}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;
