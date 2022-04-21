import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, Platform, View, SafeAreaView } from 'react-native';
  
function ContactComponent({name, number}) {
    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        }
        else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber);
    };
    return (
        <View style={styles.MainContainer}>
            <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.button} >
                <Text style={styles.TextStyle}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      //justifyContent: 'center',
      paddingTop: '15%',
      alignItems: 'center',
    },
    button: {
      height: 40,
      width: '70%',
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

export default ContactComponent;