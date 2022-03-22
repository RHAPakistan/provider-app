import React from 'react';
import { FlatList, View } from 'react-native';

import VolunteerButton from './VolunteerButton';

import styles from '../styles';

const VolunteerList = ({ onPress, data }) => {
	// fetch data here

	const renderItem = ({ item }) => (
		<VolunteerButton data={item} onPress={()=>{onPress(item)}} />
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

export default VolunteerList;
