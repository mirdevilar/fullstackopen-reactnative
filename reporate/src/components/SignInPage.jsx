import { StyleSheet, TextInput, View } from 'react-native';
import { useFormik } from 'formik';

import theme from '../theme'
import Button from './Button';
import Card from './Card';
import JustifyRight from './JustifyRight'
import Text from './Text';

const ss = StyleSheet.create({
	container: {
		marginHorizontal: theme.separations.primary,
	},
	input: {
		color: theme.colors.textPrimary,
	}
})

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
    <Card style={ss.container}>
      <TextInput
        onChange={formik.handleChange('username')}
        placeholder="Username"
        value={formik.values.username}
        style={ss.input}
      />
      <TextInput
        onChange={formik.handleChange('password')}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        style={ss.input}
      />

			<JustifyRight>
		    <Button secondary onPress={formik.handleSubmit} label="Submit" />
			</JustifyRight>
    </Card>
  );
};

const SignInPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <SignInForm onSubmit={onSubmit} />
  );
};

export default SignInPage;
