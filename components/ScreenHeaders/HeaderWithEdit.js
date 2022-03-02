import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../styles/Colors';

import styles from './styles';

const HeaderWithEdit = (navigation, route, title, screen) => {
	const { id } = route.params;

	const EditButton = () => {
		return (
			<Pressable
				style={styles.headerButton}
				onPress={() => navigation.navigate(screen, { id: id })}>
				<FontAwesome name='edit' size={24} color={Colors.black} />
			</Pressable>
		);
	};

	return {
		title: title,
		headerRight: () => <EditButton />,
	};
};

export default HeaderWithEdit;
