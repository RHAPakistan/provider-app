import React, {useState} from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
var providerApi = require("../../helpers/providerApi.js");

const confirmOTP = ({navigation, route}) => {

    const email = route.params.email;
    const [otp, setOtp] = useState("");
    const [tries, setTries] = useState(2);

    const callAPI = async ()=>{
        const resp = await providerApi.auth_forgot_verifyOTP(email,otp);
        return resp;
    }

    const confirmOTPClicked = ()=>{
        callAPI()
        .then((response)=>{
            if(response.error == 0 && response.tokenId){
                Alert.alert(response.message);
                navigation.navigate("change_password", {email: email, otp:otp})
            }
            else{
                alert(response.message);
                if(tries == 0){
                    navigation.navigate("Home")
                }
                else{
                    setTries(tries-1);
                }
            }
        })
        .catch((e)=>{
            console.log(e);
            alert("Error: ",e)
        });
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                    <Text style={styles.heading}>OTP sent to Email</Text>
                    <Text>Remaining Tries: {tries}</Text>
                    <TextInput 
                       style= {styles.text_input}
                        placeholder='Enter OTP'
                        value={otp}
                        autoCapitalize="none"
                        onChangeText={val => setOtp(val)}   
                    />
                <View>
                    <TouchableOpacity style={styles.button} onPress={confirmOTPClicked}>
                        <Text style={styles.buttonText}>Confirm OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>           
        </SafeAreaView>
    )
}

export default confirmOTP;