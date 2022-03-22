import React from 'react';
import { Text, Pressable, View } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const ActionBox = ({ action, type, title }) => {
	// let buttonStyles = [
	// 	GlobalStyles.LargeButton,
	// 	type === 'primary' ? GlobalStyles.bgGreen : GlobalStyles.bgRed,
	// ];

	let ButtonStyle, TitleStyle;
	if (type === 'cancel') {
		ButtonStyle = [GlobalStyles.LargeButton, GlobalStyles.bgRed];
		TitleStyle = GlobalStyles.LargeButtonTitle;
	} else if (type === 'primary') {
		ButtonStyle = [GlobalStyles.LargeButton, GlobalStyles.bgGreen];
		TitleStyle = GlobalStyles.LargeButtonTitle;
	} else {
		ButtonStyle = GlobalStyles.MediumButton;
		TitleStyle = [
			GlobalStyles.MediumButtonTitle,
			GlobalStyles.ButtonGreenOutlinedTitle,
		];
	}

	return (
		<View style={{ alignItems: 'center', paddingVertical: 4 }}>
			<Pressable onPress={action} style={ButtonStyle}>
				<Text style={TitleStyle}>{title}</Text>
			</Pressable>
		</View>
	);
};

export default ActionBox;
