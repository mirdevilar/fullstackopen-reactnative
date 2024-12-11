import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Selector from './Selector';

const ss = StyleSheet.create({
  default: {
    // display: 'flex',
    // flexDirection: 'row',
    // overflow: 'auto',
    // gap: theme.separations.secondary,
    // paddingLeft: theme.separations.primary,
    paddingBottom: theme.separations.primary,
    paddingTop: Constants.statusBarHeight + theme.separations.primary,
  },
});

const Nav = () => {
  return (
    <View horizontal="true" style={ss.default}>
      <ScrollView horizontal="true">
        <Selector label="Repositories" route="/" />
        <Selector label="Sign in" route="/signin" />
        <Selector label="Add review" route="/" />
      </ScrollView>
    </View>
  );
};

export default Nav;
