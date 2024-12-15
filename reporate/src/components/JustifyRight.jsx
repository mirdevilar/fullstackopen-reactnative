import { View } from 'react-native'

const JustifyRight = ({ children }) => {
	return (
		<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
			{children}
		</View>
	)
}

export default JustifyRight;
