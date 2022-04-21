import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Icon, SafeAreaView, TouchableOpacity, Picker } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "../styles";
import ProgressBar from "../../components/ProgressBar";
import GlobalStyles from "../../styles/GlobalStyles";
import PickupRequest from "../../components/PickupRequest/index";
import Maps from "../../components/Maps";
import Geolocation from '@react-native-community/geolocation';

function FirstStep({ navigation }) {

    const [lat, setLat] = React.useState(24.8607);
    const [long, setLong] = React.useState(67.0011);
    const [assignedCoordinate, setAssignedCoordinate] = React.useState({});
    const [isMapView, setIsMapView] = React.useState(false);
    const [text, onChangeText] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [progressCount, setProgressCount] = React.useState(1);

    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("");
    const [locationLink, setLocation] = React.useState("");
    const [amountOfFood, setAmountOfFood] = React.useState("");
    const [requestPlaced, setRequestPlaced] = React.useState('false');
    const [surplus, setSurplus] = React.useState("add surplus");
    

    useEffect(() =>{
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            console.log("Current Lat: ",lat, "Current Long: ",long);
            console.log("Assigned Coordinate: ",assignedCoordinate);
              
           }, (error) => alert(error.message), { 
             enableHighAccuracy: true, timeout: 1000*30, maximumAge: 1000*60*2
           }
        );
    })

    const assignLocation = (coordinate)=>{
        console.log("Co-ordinates set by provider are: ",coordinate);
        setAssignedCoordinate(coordinate);
    }

    
    const handleEdit = () => {
        setEdit(!editClicked);
        console.log(editClicked);
        console.log("I was clicked");
    }
    const handleCancel = () => {
        setDisplayText(displayText);
        setDisplayPhone(displayPhone);
        setEdit(!editClicked);
        onChangeText(displayText);
        onChangePhone(displayPhone);
    }

    const handleDone = () => {
        setDisplayText(text);
        setDisplayPhone(phone);
        setEdit(!editClicked);
    }


    return (
        <ScrollView>
            {!isMapView?
                <View>
                <SafeAreaView style={styles.containerDashboard}>
                    <View style={GlobalStyles.screenTitle}>
                        <Text style={GlobalStyles.screenTitleText}>First Step</Text>
                    </View>
                    <ProgressBar active={progressCount} message="Place the Pickup Request" />
                </SafeAreaView>
                <PickupRequest navigation={navigation} setIsMapView={setIsMapView} currentCoordinate={{latitude: lat, longitude: long}} assignedCoordinate={assignedCoordinate}/>
                </View>
                :
                <View>
                    <Maps lat={lat} long={long} setIsMapView={setIsMapView} setAssignedCoordinate={setAssignedCoordinate}/>
                </View>
            }
        </ScrollView>

    );
}

export default FirstStep;