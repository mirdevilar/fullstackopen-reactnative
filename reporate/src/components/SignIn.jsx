import { Pressable, TextInput, View } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        onChange={formik.handleChange('username')}
        placeholder="Username"
        value={formik.values.username}
      />
      <TextInput
        onChange={formik.handleChange('password')}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
      />

      <Pressable onPress={formik.handleSubmit}>
        <Text>Yes</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <SignInForm onSubmit={onSubmit} />
  );
};

export default SignIn;
