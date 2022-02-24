import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Indicator = ({ active, value }) => {
	const [circleStyle, setCircleStyle] = useState(styles.default);
	const [textStyle, setTextStyle] = useState(styles.defaultText);

	useEffect(() => {
		if (active == value) {
			setCircleStyle([styles.default, styles.active]);
			setTextStyle([styles.defaultText, styles.activeText]);
		} else if (active > value) {
			setCircleStyle([styles.default, styles.complete]);
			setTextStyle([styles.defaultText, styles.completeText]);
		} else {
			setCircleStyle(styles.default);
			setTextStyle(styles.defaultText);
		}
	}, [active]);

	return (
		<View style={circleStyle}>
			<Text style={textStyle}>{value}</Text>
		</View>
	);
};

export default Indicator;
