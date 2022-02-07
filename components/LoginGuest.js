import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

const LoginGuest = ({ navigation, shutDownModal }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const loginClicked = () => {
        navigation.navigate("Drawer");

    }
    return (
        // <Animatable.View animation="fadeInUp" style={styles.footer}>
     <View>
     <View style={styles.action}>
                <TextInput
                    placeholder="Enter Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={val => setName(val)}
                />
            </View>

            <View style={styles.action}>
                <TextInput
                    placeholder="Enter Number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={val => setNumber(val)}
                />
            </View>

            <View style={styles.action}>
                <TouchableOpacity style={styles.button} onPress={loginClicked}>
                    <Text style={styles.buttonText}>User Login</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.button} onPress={shutDownModal}>
                <Text style={styles.buttonText}>back</Text>
            </TouchableOpacity>
            </View>
     // </Animatable.View>
    );
};

export default LoginGuest;

