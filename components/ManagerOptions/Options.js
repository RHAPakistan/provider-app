import React from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

import styles from './styles';
import Colors from '../../styles/Colors';

const Options = ({ onChange, label, data }) => {
	const onChangeHandler = (selectedItem, index) => {
		onChange({ selectedItem, index });
	};
	return (
		<View style={styles.container}>
			<View style={styles.LabelWrap}>
				<Text style={styles.LabelText}>{label + ':'}</Text>
			</View>

			<View style={{ flex: 1, maxWidth: '75%' }}>
				<SelectDropdown
					data={data}
					buttonStyle={styles.inputBox}
					dropdownStyle={styles.Dropdown}
					defaultValueByIndex={0}
					statusBarTranslucent={true}
					renderDropdownIcon={() => (
						<Entypo name='chevron-down' size={24} color={Colors.black} />
					)}
					dropdownIconPosition='right'
					onSelect={onChangeHandler}
				/>
			</View>
		</View>
	);
};

export default Options;
