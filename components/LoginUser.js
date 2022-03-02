import React, { useState } from 'react';
import { Animated, View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
var providerApi = require("../helpers/providerApi.js");
const localStorage = require("../helpers/localStorage");


const LoginUser = ({ navigation, shutDownModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginClicked = async () => {
        console.log(email);
        console.log(password);
        var rp = await providerApi.signin(email,password);
        if(rp){
            navigation.navigate("Drawer");
        }else{
            alert("Not authorized! Invalid Email id or Password");
        }
    }
    const backClicked = () => {
        shutDownModal();
    }
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    return (
        //<AnimatedTouchable animation="fadeInUp" style={styles.footer} >
        <View>
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
            <TouchableOpacity style={styles.button} onPress={backClicked}>
                <Text style={styles.buttonText}>back</Text>
            </TouchableOpacity>
</View>
        //{/* </AnimatedTouchable> */}
    );
};

export default LoginUser;

