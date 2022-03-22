import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Icon,SafeAreaView, TouchableOpacity, Picker} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "../styles";
import ModalDropdown from "react-native-modal-dropdown";
import {SocketContext} from '../../context/socket'
import ProgressBar from "../../components/ProgressBar";
import GlobalStyles from "../../styles/GlobalStyles";
import PickupDetails from "../../components/detailsForm/PickupDetails";
import localStorage from "../../helpers/localStorage";
import ActionBox from "../../components/ActionBox/index";

function SecondStep({route, navigation}) {

    const pickup = route.params.pickup?route.params.pickup:{};
    const [text, onChangeText] = React.useState("name");
    const [phone, onChangePhone] = React.useState("phone");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("Add description");
    const [locationLink, setLocation] = React.useState("paste maps link here or enter address");
    const [requestPlaced, setRequestPlaced] = React.useState('false');
    const [name, setName] = React.useState("none");
    	// Process Data Here

	const data = {
		BOOKING_TIME: pickup.placementTime,
		// COMPLETION_TIME: '{COMPLETION_TIME}',
		// CANCELLATION_TIME: '{CANCELLATION_TIME}',
		CONTACT_NAME: pickup.name,
		CONTACT_PHONE: pickup.phone,
		PICKUP_LOCATION: pickup.pickupAddress,
		SURPLUS_TYPE: pickup.typeOfFood,
		DESCRIPTION: pickup.description
	};
    const cancelPickUp = () =>{
        navigation.navigate("firststep");
    }   
    return ( 
        <ScrollView>
        <SafeAreaView style={styles.detailsContainer}>
        <View style={GlobalStyles.screenTitle}>
                    <Text style = {GlobalStyles.screenTitleText}>Second Step</Text>
                </View>
               <ProgressBar active={2} message="Request has been received"/>
               
            <View style={{
                alignItems: "flex-start",
                flexDirection: "row",
                width: '95%',
                borderBottomColor: '#155F30',
                borderBottomWidth: 1,
                justifyContent: "space-between"
            }}>
                
                <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Pickup Details</Text>
                    
                
            </View>
            <View style={{"flex":1 }}>
                <PickupDetails data={data}/>

                    
                
            </View>

            <ActionBox
                type= "cancel"
                title="Cancel Pickup"
                action = {cancelPickUp}
            />
            <ActionBox
                type= "primary"
                title="Go ahead (interim)"
                action = {()=>{navigation.navigate("thirdstep", {pickup:pickup})}}
            />

            
        </SafeAreaView>
        </ScrollView>
     );
}

export default SecondStep;