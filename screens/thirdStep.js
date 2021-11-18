import React from "react";
import { StyleSheet, Text, View, Image, Button, Icon,SafeAreaView, TouchableOpacity, Picker} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import ModalDropdown from "react-native-modal-dropdown";
function ThirdStep({navigation}) {

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
                <View style = {{
                    flexDirection: "row",
                    alignSelf: 'center',
                    marginBottom: 10
                }}>
                    
                    <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor:'#155F30',
                        backgroundColor: "#155F30"
                    }}
                    >
                    <Text
                    style={{
                        fontSize: 20,
                        marginTop: 4,
                        textAlign: 'center',
                        color: 'white'
                    }}>1</Text>
                    </View>
                        
                    <View
                    style ={{
                        height: 5,
                        width: 40,
                        backgroundColor: 'black',
                        alignSelf: 'center'
                    }}
                    >
                    </View>
                    <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor:'black',
                        backgroundColor: "#155F30"
                    }}
                    >
                    <Text
                    style={{
                        fontSize: 20,
                        marginTop: 4,
                        textAlign: 'center',
                        color: 'white'
                    }}>2</Text>
                    </View>
                    <View
                    style ={{
                        height: 5,
                        width: 40,
                        backgroundColor: 'black',
                        alignSelf: 'center'
                    }}
                    >
                    </View>
                    <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor:'black',
                        backgroundColor: "white"
                    }}
                    >
                    <Text
                    style={{
                        fontSize: 20,
                        marginTop: 4,
                        textAlign: 'center',
                        color: '#155F30'
                    }}>3</Text>
                    </View>
                </View>
                <Text
                style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    color: '#155F30',
                    marginBottom: 10
                }}>Volunteer is on the way</Text>
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
                backgroundColor: '#155F30',
                padding: 15,
                width:"50%",
                margin: 20,
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: 'white' }}>Contact Volunteer</Text>
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
            onPress = {()=>{navigation.navigate("finalstep")}}>
                <Text style={{ color: 'white' }}>Go ahead (interim button)</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
        </ScrollView>
     );
}

export default ThirdStep;