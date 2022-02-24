import React from 'react';
import { Text, View } from 'react-native';
import Indicator from './Indicator';
import Line from './Line';

import styles from './styles';

const ProgressBar = ({ active, message }) => {
	return (
		<View style={styles.progressBar}>
			<View style={styles.container}>
				<Indicator value={1} active={active} />
				<Line value={2} active={active} />
				<Indicator value={2} active={active} />
				<Line value={3} active={active} />
				<Indicator value={3} active={active} />
			</View>
			<Text style={styles.message}>{message}</Text>
		</View>
	);
};

export default ProgressBar;
