import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Icon, SafeAreaView, TouchableOpacity, Picker } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import localStorage from "../../helpers/localStorage";
import providerApi from "../../helpers/providerApi";
import socketHelpers from "../../helpers/socketHelpers";
import OptionsDropdown from "../OptionsDropdown/index";
import ActionBox from "../ActionBox/index";

const PickupRequest = ({ navigation, setIsMapView, currentCoordinate, assignedCoordinate }) => {
    const [text, onChangeText] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [amountOfFood, setAmountOfFood] = React.useState("");
    const [requestPlaced, setRequestPlaced] = React.useState('false');
    const [surplus, setSurplus] = React.useState("Restaurant");
    const [name, setName] = React.useState("none");

    useEffect(() => {
        //get name
        const fetchData = async () => {
            const fullName = await localStorage.getData('name');
            const phone = await localStorage.getData('phone');
            return { fullName, phone }
        }

        fetchData()
            .then((response) => {
                const { fullName, phone } = response;
                setName(fullName);
                onChangePhone(phone);
            })

    }, [])

    const placePickUp = async () => {


        //validation
        if (location == "") {
            alert("add address details");
        } else {

            setRequestPlaced(!requestPlaced);
            var provider_id = await localStorage.getData("provider_id");
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            let locationCoordinate = currentCoordinate;
            if(assignedCoordinate){
                locationCoordinate = assignedCoordinate;
            }
            const pickupCoordinate = {
                type: 'Point',
                coordinates : [locationCoordinate.longitude, locationCoordinate.latitude]
            }
            console.log("The passing coordinates are: ",locationCoordinate)
            var pickup_object = {
                "provider": provider_id,
                // "admin":"",
                // "volunteer":"",
                "pickupAddress": location,
                "pickupCoordinate": pickupCoordinate,
                "phone": phone,
                "description": descriptionText,
                // "deliveryAddress": "deliveryAddress",
                "placementTime": dateTime,
                // "acceptanceTime":"",
                // "pickUpTime":"",
                // "deliveryTime":"",
                "amountOfFood": amountOfFood,
                "typeOfFood": surplus,
                "broadcast": true,
                "status": 0
            }
            var [response, pickup_returned] = await providerApi.createPickup(pickup_object);
            console.log(response);
            if (response == true) {
                navigation.navigate('secondstep', {pickup: pickup_returned,name:name}); 
                // console.log("Emmiting initiatePickup on socket");
                // console.log("pickup returned", pickup_returned);
                // socketHelpers.initiate_pickup(navigation, pickup_object, pickup_returned, name);
            } else {
                alert("Pickup already exists or some information missing");
            }
            console.log("Listening for Request Accepted");
            //listen for request accepted.
            // socketHelpers.place_pickup(navigation);

        }
    }
    return (
        <View style={styles.containerDashboard}>
            <View style={styles.contactInfo}>

                <Text style={styles.contactInfoText}>Contact info</Text>
            </View>
            <View style={styles.contactInfoSec}>
                <View style={{ alignItems: "flex-start", flexDirection: "column" }}>
                    <View style={{ alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text
                            style={styles.namePhone}>Name:    </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                    <View style={{ alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text
                            style={styles.namePhone}>Phone:    </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangePhone}
                            value={phone}
                        />
                    </View>
                </View>

            </View>
            <View style={styles.contactInfo}>
                <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Food info</Text>

            </View>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.headingText}>Type Of Surplus:</Text>

                <OptionsDropdown
                    options={["restaurant", "office", "marriage hall"]}
                    value={surplus}
                    setSelectedValue={setSurplus} />
            </View>
            {/* <Text style={{
                alignItems: 'center',
                padding: 10
            }}>Amount of food:</Text>
            <TextInput
                style={styles.textBox}
                onChangeText={setAmountOfFood}
                placeholder={"amount of Food"} /> */}
            
            <TouchableOpacity onPress={()=>setIsMapView(true)} style={{margin: '3%',
                alignItems: 'center',
                justifyContent: 'center',
                width: 130,
                height: 45,
                backgroundColor: '#165E2E',
                borderRadius: 5
            }}
            >
                <Text style={{color: 'white'}}>Set Pin Location</Text>
            </TouchableOpacity>

            <Text style={{
                alignItems: 'center',
                padding: 10
            }}>Address:</Text>
            <TextInput
                style={styles.textBox}
                onChangeText={setLocation}
                placeholder={"Kindly provide complete address"} />
            <Text style={{
                alignItems: 'center',
                padding: 10
            }}>Description:</Text>
            <TextInput
                style={styles.descriptionBox}
                onChangeText={setDescription}
                placeholder={"Add description of food and other details you deem important \nExample\nbiryani -> 2kgs\nqourma-> 5kgs"} />
            <View style={{flex: 1, alignItems:"center"}}>
            <ActionBox 
                action= {placePickUp}
                type= "primary"
                title= "Place Pickup Request"
            />
            </View>
        </View>
    )
}

export default PickupRequest;
