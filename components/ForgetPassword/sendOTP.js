import React, {useState} from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
var providerApi = require("../../helpers/providerApi.js");

const sendOTP = ({navigation}) => {
    const [email, setEmail] = useState("");

    const callAPI = async ()=>{
        const resp = await providerApi.auth_forgot(email);
        return resp;
    }

    const sendClicked = ()=>{
        callAPI()
        .then((response)=>{
            if(response.error == 0){
                Alert.alert(response.message);
                navigation.navigate("confirm_otp", {email: email})
            }
            else{
                alert(response.message);
            }
        })
        .catch((e)=>{
            console.log(e);
            alert("Error: ",e)
        });
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Forgot Password?</Text>
            <TextInput 
                style = {styles.text_input}
                placeholder='Enter Email'
                value={email}
                autoCapitalize="none"
                onChangeText={val => setEmail(val)}   
            />
            <TouchableOpacity style={styles.button} onPress={sendClicked}>
                <Text style={styles.buttonText}>Send Email</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}



export default sendOTP;