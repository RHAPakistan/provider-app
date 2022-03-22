import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Icon, SafeAreaView, TouchableOpacity, Picker } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { SocketContext } from '../../context/socket';
import localStorage from "../../helpers/localStorage";
import providerApi from "../../helpers/providerApi";

const PickupRequest = ({navigation}) => {
    const socket = useContext(SocketContext);
    const [text, onChangeText] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("");
    const [locationLink, setLocation] = React.useState("");
    const [amountOfFood, setAmountOfFood] = React.useState("");
    const [requestPlaced, setRequestPlaced] = React.useState('false');
    const [surplus, setSurplus] = React.useState("");
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
        if (locationLink == "") {
            alert("Location link missing, add address details");
        } else {

            setRequestPlaced(!requestPlaced);
            //const socket = io("http://localhost:5000");
            // console.log(socket)
            var provider_id = await localStorage.getData("provider_id");
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            var pickup_object = {
                "provider": provider_id,
                // "admin":"",
                // "volunteer":"",
                "pickupAddress": locationLink,
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
                "status": 1
            }
            var [response, pickup_returned] = await providerApi.createPickup(pickup_object);
            console.log(response);
            if (response == true) {
                console.log("Emmiting initiatePickup on socket");
                socket.emit("initiatePickup", { "message": pickup_returned });
                var pickup_object_send = {...pickup_object};
                pickup_object_send["name"] = name;
                navigation.navigate('secondstep', {pickup: pickup_object_send});
            } else {
                alert("Pickup already exists or some information missing");
            }

            console.log("Listening for Request Accepted");
            //console.log(socket);
            socket.on("acceptPickup", (data) => {
                navigation.navigate("thirdstep");
                socket.off("acceptPickup");
                console.log("Turned off listener for request accepted");
                socket.on("foodPicked", (data) => {
                    navigation.navigate("finalstep");
                    socket.off("foodPicked");
                    console.log("Turned off listener for food picked");
                })
            });
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

                <Text style={styles.headingText}>Type Of Surplus:</Text>

                <TextInput
                    style={styles.textBox}
                    onChangeText={setSurplus}
                    placeholder={"surplus"}
                />

            <Text style={{
                alignItems: 'center',
                padding: 10
            }}>Amount of food:</Text>
            <TextInput
                style={styles.textBox}
                onChangeText={setAmountOfFood}
                placeholder={"amount of Food"} />
            <Text style={{
                alignItems: 'center',
                padding: 10
            }}>Location:</Text>
            <TextInput
                style={styles.textBox}
                onChangeText={setLocation}
                placeholder={"locationLink"} />
            <Text style={{
                alignItems: 'center',
                padding: 10
            }}>Description:</Text>
            <TextInput
                style={styles.descriptionBox}
                onChangeText={setDescription}
                placeholder={"Add description"} />

            <TouchableOpacity onPress={placePickUp} style={styles.placePickupButton}>
                <Text style={{ color: 'white' }}>Place Pickup Request</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PickupRequest;