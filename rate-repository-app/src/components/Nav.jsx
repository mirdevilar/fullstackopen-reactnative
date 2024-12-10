import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Button from './Button';
import theme from '../theme';

const stylesheet = StyleSheet.create({
  default: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.separations.secondary,
    paddingLeft: theme.separations.primary,
    paddingBottom: theme.separations.primary,
    paddingTop: Constants.statusBarHeight + theme.separations.primary,
  },
});

const Nav = () => {
  return (
    <View style={[stylesheet.default]}>
      <Button state="selected" label="Repositories" />
      <Button label="Something else" />
    </View>
  );
};

export default Nav;
