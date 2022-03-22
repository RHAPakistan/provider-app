import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const ButtonLine = ({ label, title, action, index }) => {
	let nthChild = index % 2 == 0 ? styles.oddChild : styles.evenChild;
	return (
		<View style={[styles.Line, styles.ButtonLine, nthChild]}>
			<View>
				<Text style={styles.Label}>{label}:</Text>
			</View>
			<Pressable
				onPress={action}
				style={[GlobalStyles.MediumButton, GlobalStyles.bgGreen]}>
				<Text style={GlobalStyles.MediumButtonTitle}>{title}</Text>
			</Pressable>
		</View>
	);
};

export default ButtonLine;
