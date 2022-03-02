import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer';

import styles from './styles';
import Colors from '../../styles/Colors';

const LogoutProps = {
	style: {
		marginHorizontal: 0,
		marginVertical: 0,
		height: 48,
		borderRadius: 0,
	},
	labelStyle: {
		marginHorizontal: 8,
		fontSize: 16,
	},
	inactiveTintColor: Colors.green,
	label: 'Logout',
	onPress: () => console.log('Logout Button Pressed'),
};

const CustomDrawerContent = (props) => {
	return (
		<ScrollView>
			<View style={styles.drawerHeader}>
				<View style={styles.drawerHeaderTitle}>
					<Text style={styles.drawerHeaderName}>John Doe Smith</Text>
					<Text style={styles.drawerHeaderPhone}>+92 345 1234567</Text>
				</View>
			</View>
			<DrawerContentScrollView
				contentContainerStyle={{
					paddingTop: 0,
					justifyContent: 'space-between',
					flex: 1,
				}}>
				<DrawerItemList {...props} />
				<DrawerItem {...LogoutProps} />
			</DrawerContentScrollView>
		</ScrollView>
	);
};

export default CustomDrawerContent;
