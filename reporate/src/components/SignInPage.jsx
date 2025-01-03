import { StyleSheet, TextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import theme from '../theme';
import Button from './Button';
import Card from './Card';
import JustifyRight from './JustifyRight';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

const ss = StyleSheet.create({
  container: {
    marginHorizontal: theme.separations.primary,
  },
  input: {
    color: theme.colors.textPrimary,
  },
  errorInput: {
    borderBottomColor: theme.colors.error,
    borderBottomWidth: 1,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().required('Please enter a password'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Card style={ss.container}>
      <TextInput
        onBlur={formik.handleBlur('username')}
        onChangeText={formik.handleChange('username')}
        placeholder="Username"
        style={[ss.input, formik.errors.username ? ss.errorInput : null]}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username && (
        <Text error>{formik.errors.username}</Text>
      )}
      <TextInput
        onBlur={formik.handleBlur('password')}
        onChangeText={formik.handleChange('password')}
        placeholder="Password"
        secureTextEntry
        style={[ss.input, formik.errors.password ? ss.errorInput : null]}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <Text error>{formik.errors.password}</Text>
      )}

      <JustifyRight>
        <Button secondary onPress={formik.handleSubmit} label="Submit" />
      </JustifyRight>
    </Card>
  );
};

const SignInPage = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInForm onSubmit={onSubmit} />
  );
};

export default SignInPage;
