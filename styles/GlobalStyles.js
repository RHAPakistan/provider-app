import { StyleSheet } from 'react-native';
import Colors from './Colors';

const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.ashWhite,
		paddingTop: 8,
	},

	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	screenTitle: {
		borderBottomColor: Colors.green,
		borderBottomWidth: 2,
		paddingVertical: 4,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 16,
	},

	screenTitleText: {
		fontSize: 24,
		fontWeight: '700',
		color: Colors.green,
		flex: 1,
	},

	screenTitleButton: {
		backgroundColor: Colors.green,
		borderRadius: 8,
	},

	bgGreen: {
		backgroundColor: Colors.green,
	},

	bgRed: {
		backgroundColor: Colors.red,
	},

	bgGrey: {
		backgroundColor: Colors.grey,
	},

	ButtonGreenOutlined: {
		borderWidth: 2,
		borderColor: Colors.green,
	},

	ButtonGreenOutlinedTitle: {
		color: Colors.green,
		fontWeight: '700',
	},

	MediumButtonTitle: {
		color: Colors.white,
		fontSize: 16,
	},

	LargeButtonTitle: {
		color: Colors.white,
		fontSize: 18,
	},

	MediumButton: {
		width: 120,
		height: 40,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},

	LargeButton: {
		width: 240,
		height: 48,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},

	hrGrey: {
		width: '100%',
		height: 2,
		backgroundColor: Colors.grey,
		marginVertical: 8,
	},
});

export default GlobalStyles;
