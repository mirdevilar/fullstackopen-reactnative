import { StyleSheet, View } from 'react-native';
import Text from './Text';

const ss = StyleSheet.create({
  default: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
});

const StatCounter = ({ label, value }) => {
  const formattedValue = value < 1000
    ? value
    : `${(value / 1000).toFixed(1)}k`;

  return (
    <View style={ss.default}>
      <Text b>{formattedValue}</Text>
      <Text fontSize="tiny">{label}</Text>
    </View>
  );
};

export default StatCounter;
