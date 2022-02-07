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

  const RootDrawerNavigator = createDrawerNavigator();
  
  function onClick(){

  }
  return (            
                <RootDrawerNavigator.Navigator initialRouteName="Dashboard"  >
                <RootDrawerNavigator.Screen name = 'Dashboard' component = {DashStack} />
                <RootDrawerNavigator.Screen name = 'History' component = {History}/>
                <RootDrawerNavigator.Screen name = 'Settings' component = {Settings_screen}/>
                <RootDrawerNavigator.Screen name = 'Support' component = {Support} /> 
               </RootDrawerNavigator.Navigator> 

         );
    }