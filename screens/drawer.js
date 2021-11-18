import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, Settings} from 'react-native';
import { styles } from "./styles";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./home";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./dashboard";
import Settings_screen from "./settings";
import Support from "./support";
import History from "./history";
import DashStack from "./dashStack";


export default function Drawer() {

  const Drawer = createDrawerNavigator();
  
  function onClick(){

  }
  return ( 
            <NavigationContainer independent = {true}>            
               <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name = 'Dashboard' component = {DashStack} options ={{headerShown: false}}/>
                <Drawer.Screen name = 'History' component = {History}/>
                <Drawer.Screen name = 'Settings' component = {Settings_screen}/>
                <Drawer.Screen name = 'Support' component = {Support} />
               </Drawer.Navigator>        
          </NavigationContainer>  

         );
    }