import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Button from './Button';
import Selector from './Selector';
import useSignOut from '../hooks/useSignOut';
import useUser from '../hooks/useUser';

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
  // check is user signed in
  const { user } = useUser();
  const isSignedIn = !!user;

  const signOut = useSignOut();

  return (
    <View style={ss.bar}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={ss.scrollView}
      >
        <Selector label="Repositories" route="/" />
        <Selector label="Create a review" route="/create" />
        {isSignedIn
          ? <Button label="Sign out" route="/" onPress={signOut} />
          : <Selector label="Sign in" route="/signin" />}
        <Selector label="Sign in" route="/signin" />
      </ScrollView>
    </View>
  );
};

export default Nav;
