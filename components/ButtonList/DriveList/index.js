import React from 'react';
import { FlatList, View } from 'react-native';

import DriveButton from './DriveButton';

import styles from '../styles';

const DriveList = ({ onPress, data }) => {
	const renderItem = ({ item }) => (
		<DriveButton data={item} onPress={onPress} />
	);

	return (
		<View style={styles.list}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
};

export default DriveList;
