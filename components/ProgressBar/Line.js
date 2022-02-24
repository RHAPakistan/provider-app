import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
const Line = ({ active, value }) => {
	const [isActive, setActive] = useState(active >= value);

	useEffect(() => {
		setActive(active >= value);
	}, [active]);
	return (
		<View style={isActive ? styles.activeLine : styles.inactiveLine}></View>
	);
};

export default Line;
