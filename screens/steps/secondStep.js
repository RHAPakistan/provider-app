import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Icon, SafeAreaView, TouchableOpacity, Picker } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "../styles";
import ProgressBar from "../../components/ProgressBar";
import GlobalStyles from "../../styles/GlobalStyles";
import PickupDetails from "../../components/detailsForm/PickupDetails";
import localStorage from "../../helpers/localStorage";
import ActionBox from "../../components/ActionBox/index";
import socketHelpers from "../../helpers/socketHelpers";
import { socket } from "../../context/socket";
function SecondStep({ route, navigation }) {

    const pickup = route.params.pickup ? route.params.pickup : {};
    const name = route.params.name?route.params.name:"none";
    const [text, onChangeText] = React.useState("name");
    const [progressCount, setProgressCount] = React.useState(2);
    const [heading, setHeading] = React.useState("Request has been received")
    const [phone, onChangePhone] = React.useState("phone");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("Add description");
    const [locationLink, setLocation] = React.useState("paste maps link here or enter address");
    const [requestPlaced, setRequestPlaced] = React.useState('false');
    
    
    useEffect(()=>{

        socket.emit("initiatePickup", { "message": pickup });
        socket.on("acceptPickup", (data) => {
            console.log("accept pickup data => ", data);
            navigation.navigate("thirdstep", {pickup: data.message});
            // socket.off("acceptPickup");
            console.log("Turned off listener for request accepted");
            socket.on("foodPicked", (data) => {
                console.log("Food picked data=>", data);
                navigation.navigate("finalstep", {pickup: data.message});
                // socket.off("foodPicked");
                console.log("Turned off listener for food picked");
            })
        });
        
        socket.on("informCancelPickup",(socket_data)=>{
            console.log("pickup cancelled",socket_data);
            if(socket_data.status==2){
            navigation.navigate("secondstep", {pickup:pickup, name:name});
            }
        })
        return () =>{
            socket.off("acceptPickup");
            socket.off("foodPicked");
        }

    },[])
    // Process Data Here

    const data = {
        BOOKING_TIME: pickup.placementTime,
        // COMPLETION_TIME: '{COMPLETION_TIME}',
        // CANCELLATION_TIME: '{CANCELLATION_TIME}',
        CONTACT_NAME: name,
        CONTACT_PHONE: pickup.phone,
        PICKUP_LOCATION: pickup.pickupAddress,
        SURPLUS_TYPE: pickup.typeOfFood,
        DESCRIPTION: pickup.description
    };
    const cancelPickUp = () => {
        socketHelpers.cancel_pickup(pickup, 0, "provider");
        navigation.navigate("firststep");
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.detailsContainer}>
                <View style={GlobalStyles.screenTitle}>
                    <Text style={GlobalStyles.screenTitleText}>Second Step</Text>
                </View>
                <ProgressBar active={progressCount} message={heading} />
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
                <View style={{ "flex": 1 }}>
                    <PickupDetails data={data} />
                </View>

                <ActionBox
                    type="cancel"
                    title="Cancel Pickup"
                    action={cancelPickUp}
                />
                <ActionBox
                    type="primary"
                    title="Go ahead (interim)"
                    action={() => { navigation.navigate("thirdstep", route.params) }}
                />


            </SafeAreaView>
        </ScrollView>
    );
}

export default SecondStep;