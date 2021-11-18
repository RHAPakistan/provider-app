
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#155F30',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerDashboard: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop:50,
      paddingLeft: 15,
      paddingRight: 15
    },
    text: {
      color: 'white',
      position: 'absolute',
      bottom: 10
    },
    welcome:{
      fontSize: 20,
      width: '95%',
      borderBottomColor: '#155F30',
      borderBottomWidth:  1
    },
    button1: {
      backgroundColor: 'white',
      margin: 5,
      padding: 10,
      width: '50%',
      alignItems: 'center',
      marginTop: 100,
      borderRadius: 100
    },
    button2: {
      backgroundColor: 'white',
      margin: 5,
      padding: 10,
      width: '50%',
      alignItems: 'center',
      margin: 20,
      borderRadius: 100
    },
    createPickUpRequest:{
      backgroundColor: 'white',
      margin: 5,
      padding: 10,
      width: '95%',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 20,
      borderRadius: 40      
    },
    button: {
      width: 280,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: 'white',
      marginTop: 20

  },
  buttonText: {
      color: '#043316',
      fontSize: 16,
      fontWeight: 'bold'
  },
    pickupButtonText: {
      color: '#006400',
      alignItems: 'center',
      marginTop: 20,
      fontSize: 20,
      paddingLeft: 40
    },
    buttonsContainer: {
      marginBottom: '10'
    }
  });