import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Button, Icon,SafeAreaView, TouchableOpacity, Picker} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import ModalDropdown from "react-native-modal-dropdown";
import { NavigationContainer } from "@react-navigation/native";
import io from "socket.io-client";
import {SocketContext} from '../context/socket';
const providerApi = require("../helpers/providerApi.js");
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SOCKET_URL} from "../config.json";
import SecondStep from "./secondStep";
import ProgressBar from "../components/ProgressBar";
const localStorage = require("../helpers/localStorage");
function FirstStep({navigation}) {

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
    const [surplus, setSurplus] = React.useState("add surplus");


    const handleEdit = () =>{
        setEdit(!editClicked);
        console.log(editClicked);
        console.log("I was clicked");
    }
    const handleCancel = () =>{
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

    const placePickUp = async () =>{


        //validation
        if (locationLink==""){
            alert("Location link missing, add address details");
        }else{

        setRequestPlaced(!requestPlaced);
        //const socket = io("http://localhost:5000");
        // console.log(socket)
        var provider_id = await localStorage.getData("provider_id");
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        var pickup_object = {
            "provider": provider_id,
            // "admin":"",
            // "volunteer":"",
            "pickupAddress": locationLink,
            "phone":phone,
            "description":descriptionText,
            // "deliveryAddress": "deliveryAddress",
            "placementTime":dateTime,
            // "acceptanceTime":"",
            // "pickUpTime":"",
            // "deliveryTime":"",
            "amountOfFood":amountOfFood,
            "typeOfFood":surplus,
            "broadcast":true,
            "status":1
        }
        var [response, pickup_returned] = await providerApi.createPickup(pickup_object);
        console.log(response);
        if(response==true){
        console.log("Emmiting initiatePickup on socket");
        socket.emit("initiatePickup", {"message":pickup_returned});
        navigation.navigate('secondstep');
        }else{
            alert("Pickup already exists or some information missing");
        }
 
        console.log("Listening for Request Accepted");
        //console.log(socket);
        socket.on("acceptPickup", (data) =>{
            navigation.navigate("thirdstep");
            socket.off("acceptPickup");
            console.log("Turned off listener for request accepted");
            socket.on("foodPicked", (data)=>{
                navigation.navigate("finalstep");
                socket.off("foodPicked");
                console.log("Turned off listener for food picked");
            })
        });
    }
    }   
    return ( 
        <ScrollView>
        <SafeAreaView style={styles.containerDashboard}>
                <ProgressBar active={1} message="Place the Pickup Request"/>

            <View style={{
                alignItems: "flex-start",
                flexDirection: "row",
                width: '95%',
                borderBottomColor: '#155F30',
                borderBottomWidth: 1,
                justifyContent: "space-between"
            }}>
                
                <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Contact info</Text>
                {editClicked ?
                    <View style={{ alignItems: "flex-start", flexDirection: "row", justifyContent: "space-around" }}>

                        <TouchableOpacity onPress={handleCancel} style={{
                            borderRadius: 10,
                            backgroundColor: '#155F30',
                            padding: 8,
                            marginBottom: 5,
                            marginRight: 5
                        }}>
                            <Text style={{ color: 'white' }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDone} style={{
                            borderRadius: 10,
                            backgroundColor: '#155F30',
                            padding: 8,
                            marginBottom: 5
                        }}>
                            <Text style={{ color: 'white' }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View>
                        <TouchableOpacity onPress={handleEdit} style={{
                            borderRadius: 10,
                            backgroundColor: '#155F30',
                            padding: 8,
                            marginBottom: 5
                        }}>
                            <Text style={{ color: 'white' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View style={{
                alignItems: "flex-start",
                flexDirection: 'row',
                padding: 10
            }}>

                {editClicked ?
                    <View style={{ alignItems: "flex-start", flexDirection: "column" }}>
                        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
                            <Text
                                style={{
                                    padding: 5,
                                    marginTop: 5
                                }}>Name:    </Text>
                            <TextInput
                                style={{
                                    width: '80%',
                                    backgroundColor: 'white',
                                    padding: 5,
                                    margin:4,
                                    borderWidth: 1,
                                    borderRadius: 10
                                }}
                                onChangeText={onChangeText}
                                placeholder={"Enter name"}
                                value={text}
                            />
                        </View>
                        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
                            <Text
                                style={{
                                    padding: 5,
                                    marginTop: 5
                                }}>Phone:    </Text>
                            <TextInput
                                style={{
                                    width: '80%',
                                    padding: 5,
                                    margin: 4,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderRadius: 10
                                }}
                                onChangeText={onChangePhone}
                                placeholder={"phone"}
                                value={phone}
                            />
                        </View>
                    </View>
                    :
                    <View>
                        <View style={{ alignItems: 'flex-start', flexDirection: "row" }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Name:    </Text>
                            <Text style={{ padding: 5 }}>{displayText}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', flexDirection: "row" }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Phone:    </Text>
                            <Text style={{ padding: 5 }}>{displayPhone}</Text>
                        </View>
                    </View>
                }
            </View>
            <View style={{
                alignItems: "flex-start",
                flexDirection: "row",
                width: '95%',
                borderBottomColor: '#155F30',
                borderBottomWidth: 1,
                justifyContent: "space-between"
            }}>
                <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Food info</Text>

            </View>
            <View style={{
                alignItems: "flex-start",
                flexDirection: "row",
                width:'95%',
                justifyContent: "space-between"
            }}>

                <Text style ={{
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 5
                }}>Type Of Surplus:</Text>

                <ModalDropdown
                style = {{
                    padding: 8,
                    backgroundColor:'white',
                    borderRadius: 10,
                    margin: 5,
                    alignItems: 'center',
                    width: '40%',
                    borderWidth: 1,
                    borderColor: 'black',
                    borderStyle: 'solid'
                }}
                textStyle={{
                }}
                options={["biryani","qaurma", "pulaow"]}
                defaultValue = {surplus}
                onChangeText={setSurplus}
                />
            
            </View>
            <Text style ={{
                    alignItems: 'center',
                    padding: 10
                }}>Amount of food:</Text>
            <TextInput
            style={{
                marginLeft: 10,
                padding: 5,
                width: '95%',
                height: 50,
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 10
            }}
            onChangeText={setAmountOfFood}
            placeholder={"amount of Food"} />
            <Text style ={{
                    alignItems: 'center',
                    padding: 10
                }}>Location:</Text>
            <TextInput
            style={{
                marginLeft: 10,
                padding: 5,
                width: '95%',
                height: 50,
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 10
            }}
            onChangeText={setLocation}
            placeholder={"locationLink"} />                        
            <Text style ={{
                    alignItems: 'center',
                    padding: 10
                }}>Description:</Text>
            <TextInput
            style={{
                marginLeft: 10,
                padding: 5,
                width: '95%',
                height: 100,
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 10
            }}
            onChangeText={setDescription}
            placeholder={"Add description"} />

            <TouchableOpacity onPress={placePickUp} style={{
                borderRadius: 10,
                backgroundColor: '#155F30',
                padding: 15,
                width:"50%",
                margin: 20,
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: 'white' }}>Place Pickup Request</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
        </ScrollView>
     );
}

export default FirstStep;