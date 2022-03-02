import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, Settings } from 'react-native';
import { styles } from "./styles";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./home";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./dashboard";
import Settings_screen from "./settings";
import Support from "./support";
import History from "./history";
import DashStack from "./dashStack";
import PrimaryHeader from "../components/ScreenHeaders/PrimaryHeader";
import CustomDrawerContent from "../components/CustomDrawerContent";


export default function Drawer() {

  const RootDrawerNavigator = createDrawerNavigator();
  const DrawerStyles = {
    drawerActiveBackgroundColor: Colors.lightGreen,
    drawerActiveTintColor: Colors.white,
    drawerInactiveTintColor: Colors.green,
    drawerItemStyle: {
      marginHorizontal: 0,
      marginVertical: 0,
      height: 48,
      borderRadius: 0,
    },
    drawerLabelStyle: {
      marginHorizontal: 8,
      fontSize: 16,
    },
  };
  function onClick() {

  }
  return (
    <RootDrawerNavigator.Navigator
     initialRouteName="Dashboard"  
     screenOptions={DrawerStyles}
     drawerContent={(props) => <CustomDrawerContent {...props}/>}>
      <RootDrawerNavigator.Screen 
      name='Dashboard' component={DashStack}
      options={{headerShown:false}}
       />
      <RootDrawerNavigator.Screen 
      name='History' component={History}
      options={{headerShown: false}} />
      <RootDrawerNavigator.Screen
       name='Settings' component={Settings_screen}
       options={{headerShown: false}} />
      <RootDrawerNavigator.Screen
       name='Support' component={Support}
       options={{headerShown: false}} />
    </RootDrawerNavigator.Navigator>

  );
}