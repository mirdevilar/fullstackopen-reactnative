import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const ss = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.bgContent,
    paddingVertical: 6,
    paddingHorizontal: theme.paddings.primary,
    marginRight: theme.separations.secondary,
    borderRadius: theme.paddings.primary,
    width: 'auto',
  },
  secondary: {
    backgroundColor: theme.colors.bgBody,
    borderRadius: theme.paddings.primary,
  },
});

const Button = ({ label, onPress, secondary }) => {
  const styles = [
    ss.default,
    secondary && ss.secondary,
  ];

  return (
    <Pressable onPress={onPress} style={styles}>
      <Text b>{label}</Text>
    </Pressable>
  );
};

export default Button;
