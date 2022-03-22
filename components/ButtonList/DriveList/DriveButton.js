import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from '../styles';

const DriveButton = ({ data, onPress }) => {
	const [ButtonStyle, setButtonStyles] = useState(null);
	const [TitleStyle, setTitleStyles] = useState(styles.buttonTitleText);
	const [InfoStyle, setInfoStyles] = useState(styles.buttonInfoText);

	const onPressInHandler = () => {
		setButtonStyles(styles.activeButton);
		setTitleStyles(styles.activeButtonTitle);
		setInfoStyles(styles.activeButtonInfo);
	};

	const onPressHandler = () => {
		onPress(data);
	};

	const onPressOutHandler = () => {
		setButtonStyles(null);
		setTitleStyles(styles.buttonTitleText);
		setInfoStyles(styles.buttonInfoText);
	};

	return (
		<Pressable
			onPressIn={onPressInHandler}
			onPress={onPressHandler}
			onPressOut={onPressOutHandler}
			style={[styles.button, ButtonStyle]}>
			<View style={styles.buttonHeader}>
				<Text style={TitleStyle}>{data.driveLocation}</Text>
			</View>

			<View style={styles.buttonHeader}>
				<Text style={InfoStyle}>{data.departureTime}</Text>
				<Text style={InfoStyle}>{data.date}</Text>
			</View>
			
		</Pressable>
	);
};

export default DriveButton;
