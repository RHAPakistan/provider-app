import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TextLine = ({ label, value, index }) => {
	let nthChild = index % 2 == 0 ? styles.oddChild : styles.evenChild;
	return (
		<View style={[styles.Line, nthChild]}>
			<View>
				<Text style={styles.Label}>{label}:</Text>
			</View>
			<View>
				<Text>{value}</Text>
			</View>
		</View>
	);
};

export default TextLine;
