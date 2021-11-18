import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./home";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Dashboard({navigation}) {

  const Drawer = createDrawerNavigator();
  
  function onClick(){
    navigation.navigate('firststep')
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
      <TouchableOpacity onPress={onClick} style={styles.createPickUpRequest}>
        <Image style={{ borderRadius: 20 }} source={require('../assets/contact.png')} />
        <View >
          <Text style={styles.pickupButtonText}>{"     Contact"}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
         );
    }