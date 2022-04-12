import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import HomeScreen from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './screens/drawer';
import Signup from './components/Signup';
import LoginUser from './components/LoginUser';
import { SocketContext, socket } from './context/socket';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  render() {
    return (
      <SocketContext.Provider value={socket}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
              name="Drawer"
              component={Drawer}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="signup"
              component={Signup}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="loginuser"
              component={LoginUser}
              options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SocketContext.Provider>
    );
  }
}


