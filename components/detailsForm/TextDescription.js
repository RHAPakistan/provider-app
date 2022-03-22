import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TextDescription = ({ label, value, index }) => {
	let nthChild = index % 2 == 0 ? styles.oddChild : styles.evenChild;
	return (
		<View style={[styles.Description, nthChild]}>
			<View style={styles.DescLine}>
				<Text style={styles.Label}>{label}:</Text>
			</View>
			<View style={styles.descBox}>
				<Text style={styles.descText}>{value}</Text>
			</View>
		</View>
	);
};

export default TextDescription;
