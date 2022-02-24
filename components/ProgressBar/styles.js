import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../styles/Colors';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	progressBar: {
		marginHorizontal: 16,
		marginTop: 8,
		borderBottomWidth: 2,
		borderBottomColor: Colors.grey,
		alignSelf: "center"
	},

	message: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 4,
		marginBottom: 8,
	},

	// Indicator Containers
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	default: {
		width: 36,
		height: 36,
		borderWidth: 1,
		borderRadius: 18,
		borderColor: Colors.darkGrey,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
	},

	active: {
		borderWidth: 2,
		borderColor: Colors.green,
	},

	complete: {
		backgroundColor: Colors.green,
		borderWidth: 0,
	},

	defaultText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.darkGrey,
	},

	activeText: {
		color: Colors.green,
	},

	completeText: {
		color: Colors.white,
	},

	inactiveLine: {
		height: 2,
		width: (screenWidth - (36 * 5 + 16 * 4)) / 4,
		backgroundColor: Colors.lightGrey,
	},

	activeLine: {
		height: 2,
		width: (screenWidth - (36 * 5 + 16 * 4)) / 4,
		backgroundColor: Colors.green,
	},
});

export default styles;
