import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	LabelWrap: {
		justifyContent: 'center',
	},

	LabelText: {
		fontSize: 21,
		fontWeight: 'bold',
	},

	Dropdown: {
		borderRadius: 8,
		marginTop: 8,
	},

	inputBox: {
		width: '100%',
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Colors.lightGrey,
		backgroundColor: Colors.white,
	},
});

export default styles;
