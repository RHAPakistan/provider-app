import React, { Component } from 'react';
import HomeScreen from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './screens/drawer';
import Signup from './components/Signup';
import LoginUser from './components/LoginUser';
import SendOTP from './components/ForgetPassword/SendOTP';
import ConfirmOTP from './components/ForgetPassword/ConfirmOTP';
import ChangePassword from './components/ForgetPassword/ChangePassword';
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

            <Stack.Screen
              name="send_otp"
              component={SendOTP}
              options={{ headerShown: false }} />

            <Stack.Screen
              name="confirm_otp"
              component={ConfirmOTP}
              options={{ headerShown: false }} />

            <Stack.Screen
              name="change_password"
              component={ChangePassword}
              options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      </SocketContext.Provider>
    );
  }
}


