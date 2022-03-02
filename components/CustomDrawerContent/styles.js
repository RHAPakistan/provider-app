import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
	drawerHeader: {
		backgroundColor: Colors.green,
		height: 160,
		flex: 1,
		flexDirection: 'column-reverse',
	},

	drawerHeaderTitle: {
		margin: 16,
	},

	drawerHeaderName: {
		color: Colors.white,
		fontWeight: '700',
		fontSize: 20,
	},

	drawerHeaderPhone: {
		color: Colors.white,
		fontWeight: '300',
		fontSize: 16,
	},
});

export default styles;
