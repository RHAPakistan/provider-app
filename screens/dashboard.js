import React, {useState, useEffect} from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import localStorage from "../helpers/localStorage";

export default function Dashboard({navigation}) {

  const [name, setName]= useState("Guest");
  useEffect(()=>{
    const fetchData = async()=>{
      const resp = await localStorage.getData("name");
      return resp;
    }
    fetchData()
    .then((resp)=>{
      setName(resp);
    })
  })
  
  async function onClick(){        
        navigation.navigate('firststep')
  }
  function onClickContact(){
    navigation.navigate('contact')
  }
  return ( 
    <SafeAreaView style={styles.containerDashboard}>
      <Text style={styles.welcome}>{"Welcome "+ name}</Text>
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