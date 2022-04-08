import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

const Search = ({ onSubmit, placeholder }) => {
	const [SearchText, setSearchText] = useState('');

	const SearchHandler = () => {
		onSubmit(SearchText);
	};

	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<TextInput
					style={[styles.inputBox, { fontSize: 16, paddingHorizontal: 8 }]}
					autoCapitalize='none'
					autoCorrect={false}
					clearButtonMode='always'
					value={SearchText}
					returnKeyType='search'
					placeholder={placeholder}
					onChangeText={(text) => setSearchText(text)}
					onSubmitEditing={SearchHandler}
				/>
			</View>
		</View>
	);
};

export default Search;
