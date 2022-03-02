import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../styles/Colors';

import styles from './styles';

const PrimaryHeader = (navigation, title) => {
	const MenuButton = () => {
		return (
			<Pressable
				style={styles.headerButton}
				onPress={() => navigation.openDrawer()}>
				<Ionicons name='menu' size={30} color={Colors.white} />
			</Pressable>
		);
	};
	const BellButton = () => {
		return (
			<Pressable
				style={styles.headerButton}
				onPress={() => navigation.push('NotificationScreen')}>
				<Ionicons name='notifications' size={24} color={Colors.white} />
			</Pressable>
		);
	};

	return {
		title: title,
		headerLeft: () => <MenuButton />,
		headerRight: () => <BellButton />,
		headerStyle: {
			backgroundColor: Colors.green,
		},
		headerTitleStyle: {
			color: Colors.white,
		},
	};
};

export default PrimaryHeader;
