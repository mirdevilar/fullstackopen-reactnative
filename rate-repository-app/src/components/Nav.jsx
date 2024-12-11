import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Selector from './Selector';

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
      <Selector label="Repositories" route="/" />
      <Selector label="Sign in" route="/signin" />
    </View>
  );
};

export default Nav;
