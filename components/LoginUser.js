import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';

const LoginUser = ({ navigation, shutDownModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginClicked = () => {
        navigation.navigate("Drawer");
    }
    return (
        <Animatable.View animation="fadeInUp" style={styles.footer} onPress={shutDownModal}>

            <View style={styles.action}>
                <TextInput
                    placeholder="Enter Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={val => setEmail(val)}
                />
            </View>

            <View style={styles.action}>
                <TextInput
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={val => setPassword(val)}
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
        </Animatable.View>
    );
};

export default LoginUser;

