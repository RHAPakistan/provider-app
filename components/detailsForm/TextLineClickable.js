import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

const TextLine = ({ label, value, action, index }) => {
	let nthChild = index % 2 == 0 ? styles.oddChild : styles.evenChild;
	return (
		<View style={[styles.Line, nthChild]}>
			<View>
				<Text style={styles.Label}>{label}:</Text>
			</View>
			<TouchableWithoutFeedback onPress={action}>
				<View>
					<Text style={styles.textClickable}>{value}</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default TextLine;
