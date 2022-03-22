import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from '../styles';

const PickupButton = ({ data, onPress }) => {
	const [ButtonStyle, setButtonStyles] = useState(null);
	const [TitleStyle, setTitleStyles] = useState(styles.buttonTitleText);
	const [InfoStyle, setInfoStyles] = useState(styles.buttonInfoText);
	const onPressInHandler = () => {
		setButtonStyles(styles.activeButton);
		setTitleStyles(styles.activeButtonTitle);
		setInfoStyles(styles.activeButtonInfo);
	};

	const onPressHandler = () => {
		onPress(data.id);
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
				<Text style={TitleStyle}>Status:{data.status}</Text>
				<Text style={InfoStyle}>{data.placementTime}</Text>
			</View>

			<View style={styles.buttonHeader}>
				<Text style={InfoStyle}>Pickup Address: {data.pickupAddress}</Text>
			</View>
			<View style={styles.buttonHeader}>
				<Text style={InfoStyle}>Description: {data.description==""?"None":data.description}</Text>
			</View>
			<View style={styles.buttonHeader}>
				<Text style={InfoStyle}>Amount: {data.amountOfFood==""?"None":data.amountOfFood}</Text>
			</View>
			<View style={styles.buttonHeader}>
				<Text style={InfoStyle}>Type: {data.typeOfFood==""?"None":data.typeOfFood}</Text>
			</View>
		</Pressable>
	);
};

export default PickupButton;
