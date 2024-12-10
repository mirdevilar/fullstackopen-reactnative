import { StyleSheet, View } from 'react-native';
import theme from '../theme';

const ss = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.bgContent,
    padding: theme.paddings.primary,
    borderRadius: theme.paddings.primary,
  },
  secondary: {
    backgroundColor: theme.colors.bgBody,
    borderRadius: theme.paddings.secondary,
  },
  hFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const Card = ({ type, flex, children, style, ...props }) => {
  const styles = [
    ss.default,
    type === 'secondary' && ss.secondary,
    flex === 'h' && ss.hFlex,
    style,
  ];

  return (
    <View style={styles} {...props}>{children}</View>
  );
};

export default Card;
