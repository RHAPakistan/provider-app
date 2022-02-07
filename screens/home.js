import React, {useState} from "react";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import LoginUser from "../components/LoginUser";
import LoginGuest from "../components/LoginGuest";

const HomeScreen = ({navigation}) => {

  const [isUserLoginClicked, setIsUserLoginClicked] = useState(false);
  const [isGuestLoginClicked, setIsGuestLoginClicked] = useState(false);

  var logo = require('../assets/logo.jpg');
  const userLoginClicked = () => {
    console.log("this was clicked");
    setIsUserLoginClicked(true);
  }
  const guestLoginClicked = () => {
    setIsGuestLoginClicked(true);
  }

  const shutDownModal = () => {
    setIsUserLoginClicked(false);
    setIsGuestLoginClicked(false);
  }

  return (
    <View style={styles.container} >
      <Image source={logo} onPress={() => { setIsUserLoginClicked(!isUserLoginClicked) }} />
      {isUserLoginClicked ? <LoginUser navigation={navigation} shutDownModal={shutDownModal}></LoginUser>
        : isGuestLoginClicked ?
          <View>
            <LoginGuest navigation={navigation} shutDownModal={shutDownModal}></LoginGuest>
          </View>
          :
          <View>
            <TouchableOpacity style={styles.button} onPress={userLoginClicked}>
              <Text style={styles.buttonText}>User Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={guestLoginClicked}>
              <Text style={styles.buttonText}>Guest Login</Text>
            </TouchableOpacity>
          </View>
      }
      <Text style={styles.text}>Provider App</Text>

    </View>

    );
  }


export default HomeScreen;

