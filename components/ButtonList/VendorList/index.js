import React from 'react';
import { FlatList, View } from 'react-native';

import VendorButton from './VendorButton';

import styles from '../styles';

const VendorList = ({ onPress, data }) => {
	// fetch data here

	const renderItem = ({ item }) => (
		<VendorButton data={item} onPress={onPress} />
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

export default VendorList;
