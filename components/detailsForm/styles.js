import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
	Line: {
		marginHorizontal: 16,
		height: 36,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	ButtonLine: {
		height: 48,
	},

	Description: {
		marginHorizontal: 16,
	},

	DescLine: {
		marginHorizontal: 0,
		height: 36,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	descBox: {
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Colors.lightGrey,
		backgroundColor: Colors.ashWhite,
		marginHorizontal: 8,
		marginBottom: 8,
		padding: 8,
	},

	descText: { fontSize: 16 },

	oddChild: {
		backgroundColor: Colors.ashWhite,
	},

	evenChild: {
		backgroundColor: Colors.grey94,
	},

	Label: {
		fontWeight: 'bold',
		fontSize: 16,
	},

	textClickable: {
		textDecorationLine: 'underline',
	},

	splitter: {
		height: 2,
		marginHorizontal: 16,
		marginBottom: 8,
		backgroundColor: Colors.grey,
	},
});

export default styles;
