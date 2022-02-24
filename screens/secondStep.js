import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Icon,SafeAreaView, TouchableOpacity, Picker} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import ModalDropdown from "react-native-modal-dropdown";
import { socket } from "../context/socket";
import ProgressBar from "../components/ProgressBar";

function SecondStep({navigation}) {

    const [text, onChangeText] = React.useState("name");
    const [phone, onChangePhone] = React.useState("phone");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("Add description");
    const [locationLink, setLocation] = React.useState("paste maps link here or enter address");
    const [requestPlaced, setRequestPlaced] = React.useState('false');

    const cancelPickUp = () =>{
        navigation.navigate("firststep");
    }   
    return ( 
        <ScrollView>
        <SafeAreaView style={styles.containerDashboard}>
               <ProgressBar active={2} message="Request has been received"/>
               
            <View style={{
                alignItems: "flex-start",
                flexDirection: "row",
                width: '95%',
                borderBottomColor: '#155F30',
                borderBottomWidth: 1,
                justifyContent: "space-between"
            }}>
                
                <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Pickup #: KHI12345678</Text>
                    
                
            </View>
            <View style={{
                alignItems: "flex-start",
                flexDirection: 'row',
                padding: 10
            }}>

                    <View>
                        <View style={{ alignItems: 'flex-start', flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Name:    </Text>
                            <Text style={{ padding: 5 }}>{displayText}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Phone:    </Text>
                            <Text style={{ padding: 5 }}>{displayPhone}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Location:    </Text>
                            <Text style={{ padding: 5 }}>{displayPhone}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Type of surplus:    </Text>
                            <Text style={{ padding: 5 }}>{displayPhone}</Text>
                        </View>                                               
                        <View style={{ alignItems: 'flex-start', flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    alignItems: 'center',
                                    padding: 5
                                }}>Description:    </Text>
                            <Text style={{ padding: 5 }}>{displayPhone}</Text>
                        </View> 
                    </View>
                    
                
            </View>

            <TouchableOpacity onPress={cancelPickUp} style={{
                borderRadius: 10,
                backgroundColor: 'red',
                padding: 15,
                width:"50%",
                margin: 20,
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: 'white' }}>Cancel Pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelPickUp} style={{
                borderRadius: 10,
                backgroundColor: 'black',
                padding: 15,
                width:"50%",
                margin: 20,
                alignSelf: 'center',
                alignItems: 'center'
            }}
            onPress = {()=>{navigation.navigate("thirdstep")}}>
                <Text style={{ color: 'white' }}>Go ahead (interim button)</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
        </ScrollView>
     );
}

export default SecondStep;