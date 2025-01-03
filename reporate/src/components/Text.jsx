import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const ss = StyleSheet.create({
  default: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeTiny: {
    fontSize: theme.fontSizes.tiny,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  italic: {
    fontStyle: 'italic',
  },
  error: {
    color: theme.colors.error,
    fontSize: theme.fontSizes.tiny,
  },
});

const Text = ({
  fontSize, b, i, error, children, style, ...props
}) => {
  const styles = [
    ss.default,
    fontSize === 'subheading' && ss.fontSizeSubheading,
    fontSize === 'tiny' && ss.fontSizeTiny,
    b && ss.bold,
    i && ss.italic,
    error && ss.error,
    style,
  ];

  return (
    <NativeText style={styles} props={props}>
      {children}
    </NativeText>
  );
};

export default Text;
