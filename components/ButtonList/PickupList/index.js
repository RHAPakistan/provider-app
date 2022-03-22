import React from 'react';
import { FlatList, View } from 'react-native';

import PickupButton from './PickupButton';

import styles from '../styles';

const PickupList = ({ onPress, data }) => {
	// fetch data here

	const renderItem = ({ item, index }) => (
		<PickupButton data={item} onPress={()=>{onPress(item)}} index = {index}/>
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

export default PickupList;
