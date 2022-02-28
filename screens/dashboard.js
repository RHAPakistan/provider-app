import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Button, PermissionsAndroid,SafeAreaView, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./home";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Geolocation from 'react-native-geolocation-service';

export default function Dashboard({navigation}) {
  
  async function onClick(){
    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //     {
    //       title: "Cool Photo App Camera Permission",
    //       message:
    //         "Cool Photo App needs access to your camera " +
    //         "so you can take awesome pictures.",
    //       buttonNeutral: "Ask Me Later",
    //       buttonNegative: "Cancel",
    //       buttonPositive: "OK"
    //     }
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log("You can use the camera");
    //     const loc = await Geolocation.getCurrentPosition(
    //       (position) => {
    //         console.log("abcd");
    //         console.log(position);
    //       },
    //       (error) => {
    //         console.log("aaaaaaa");
    //         // See error code charts below.
    //         console.log(error.code, error.message);
    //       },
    //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //   );
    //   } else {
    //     console.log("Camera permission denied");
    //   }
    // } catch (err) {
    //   console.warn(err);
    // }        
    navigation.navigate('firststep')
  }
  function onClickContact(){
    navigation.navigate('contact')
  }
  return ( 
    <SafeAreaView style={styles.containerDashboard}>
      <Text style={styles.welcome}>Welcome, John Doe</Text>
      <TouchableOpacity onPress={onClick} style={styles.createPickUpRequest}>
        <Image style={{ borderRadius: 20 }} source={require('../assets/pickupreq.png')} />
        <View >
          <Text style={styles.pickupButtonText}>{"Create Pickup\n     Request"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickContact} style={styles.createPickUpRequest}>
        <Image style={{ borderRadius: 20 }} source={require('../assets/contact.png')} />
        <View >
          <Text style={styles.pickupButtonText}>{"     Contact"}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
         );
    }