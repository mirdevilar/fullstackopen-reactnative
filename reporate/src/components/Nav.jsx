import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Selector from './Selector';

const ss = StyleSheet.create({
  bar: {
    paddingBottom: theme.separations.primary,
    paddingTop: Constants.statusBarHeight + theme.separations.primary,
  },
  scrollView: {
    paddingLeft: theme.separations.primary,
    paddingRight: theme.separations.primary - theme.separations.secondary,
  },
});

const Nav = () => {
  return (
    <View style={ss.bar}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={ss.scrollView}
      >
        <Selector label="Repositories" route="/" />
        <Selector label="Create a review" route="/create" />
        <Selector label="Sign in" route="/signin" />
      </ScrollView>
    </View>
  );
};

export default Nav;
