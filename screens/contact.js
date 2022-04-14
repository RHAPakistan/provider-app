import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import providerApi from '../helpers/providerApi';
const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
  
      width: '80%',
      padding: 6,
      backgroundColor: '#4130E6',
      borderRadius: 7,
    },
  
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    }
  
  });
  
function Contact({navigation}) {
    const [contact, setContact] = React.useState("0");
    React.useEffect(()=>{
        const fetchData = async()=>{
        const contact = await providerApi.get_contact()
        return contact
        }
        fetchData()
        .then((response)=>{
            console.log("resp",response);
            setContact(response);
        })
    },[navigation])
    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${contact}`;
        }
        else {
            phoneNumber = `telprompt:${contact}`;
        }

        Linking.openURL(phoneNumber);
    };
    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.button} >

                <Text style={styles.TextStyle}>{contact}</Text>

            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Contact;