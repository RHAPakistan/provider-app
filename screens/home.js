import React, {useState} from "react";
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from "./styles";

const HomeScreen = ({navigation}) => {

  const [isUserLoginClicked, setIsUserLoginClicked] = useState(false);
  const [isGuestLoginClicked, setIsGuestLoginClicked] = useState(false);

  var logo = require('../assets/logo.jpg');
  const userLoginClicked = () => {
    navigation.navigate("loginuser");
  }
  const guestLoginClicked = () => {
    navigation.navigate("signup");
  }

  return (
    <View style={styles.container} >
      <Image source={logo} onPress={() => { setIsUserLoginClicked(!isUserLoginClicked) }} />
      
      <View>
        <TouchableOpacity style={styles.button} onPress={userLoginClicked}>
          <Text style={styles.buttonText}>User Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={guestLoginClicked}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text}>Provider App</Text>

    </View>

    );
  }


export default HomeScreen;

