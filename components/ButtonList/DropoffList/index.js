import React from 'react';
import { FlatList, View } from 'react-native';

import DropoffButton from './DropoffButton';

import styles from '../styles';

const DropoffList = ({ onPress, data }) => {
	// fetch data here

	const renderItem = ({ item }) => (
		<DropoffButton data={item} onPress={onPress} />
	);

	return (
		<View style={styles.list}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default DropoffList;
