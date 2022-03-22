import React from 'react';
import { View } from 'react-native';
import ButtonLine from './ButtonLine';
import TextLineClickable from './TextLineClickable';

const ButtonToTextClickable = ({ data, index, label, title }) => {
	const { value, action } = data;

	const dataProps = { index, label, title, value, action };
	return (
		<View>
			{!value ? (
				<ButtonLine {...dataProps} />
			) : (
				<TextLineClickable {...dataProps} />
			)}
		</View>
	);
};

export default ButtonToTextClickable;
