import React, {useState} from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
var providerApi = require("../../helpers/providerApi.js");

const changePassword = ({navigation, route}) => {

    const email = route.params.email;
    const otp = route.params.otp;
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const callAPI = async ()=>{
        const resp = await providerApi.auth_forgot_changePassword(email, otp, password);
        return resp;
    }
    const changePasswordClicked = ()=>{
        if (password === confirmPassword){
            if(password.length >5){
                callAPI()
                .then((response)=>{
                    Alert.alert(response.message);
                    navigation.navigate("Home");
                })
                .catch((e)=>{
                    console.log(e);
                    alert("Error: ",e)
                });
            }
            else{
                alert("Length of Password must be greater than 5")
            }
        }
        else{
            alert("Password don't match")
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.heading}>Now you can change your password</Text>
                <TextInput 
                    style = {styles.text_input}
                    placeholder='Enter Password'
                    value={password}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={val => setPassword(val)}   
                />
                <TextInput 
                    style = {styles.text_input}
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={val => setConfirmPassword(val)}   
                />
                <TouchableOpacity style={styles.button} onPress={changePasswordClicked}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>           
        </SafeAreaView>
    )
}

export default changePassword;