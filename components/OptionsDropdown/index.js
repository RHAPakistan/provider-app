import React from 'react';
import { View, Picker, StyleSheet } from "react-native";

import styles from './styles';

const OptionsDropdown = ({ options, value, setSelectedValue }) => {

    return (

        <View style={styles.container}>
            <Picker
                selectedValue={value}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {options.map(item => (
                    <Picker.Item 
                    label={item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()} 
                    value= {item} key={item} />
                ))
                }
            </Picker>
        </View>
    )
}

export default OptionsDropdown;