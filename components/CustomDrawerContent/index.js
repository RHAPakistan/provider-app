import React, {useContext, useState, useEffect} from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer';

import styles from './styles';
import Colors from '../../styles/Colors';
import localStorage from "../../helpers/localStorage";



const CustomDrawerContent = (props) => {
	const [name, setName] = useState("Guest");
	const [phone, setPhone] = useState("Phone")

	const logout = (navigation)=>{
		localStorage.clearAsyncStorage();
		navigation.navigate("Home");
	}
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
		onPress: () => logout(props.navigation),
	};
	
	useEffect(()=>{
		//get name
		const fetchData = async() =>{
			const fullName = await localStorage.getData('name');
			const phone = await localStorage.getData('phone');
			return {fullName, phone}
		}

		fetchData()
		.then((response)=>{
			const {fullName, phone} = response;
			setName(fullName);
			setPhone(phone);
		})

	})
	return (
		<ScrollView>
			<View style={styles.drawerHeader}>
				<View style={styles.drawerHeaderTitle}>
					<Text style={styles.drawerHeaderName}>{name}</Text>
					<Text style={styles.drawerHeaderPhone}>{phone}</Text>
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
