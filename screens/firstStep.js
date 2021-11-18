import React from "react";
import { StyleSheet, Text, View, Image, Button, Icon,SafeAreaView, TouchableOpacity, Picker} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import ModalDropdown from "react-native-modal-dropdown";
import { NavigationContainer } from "@react-navigation/native";
function FirstStep({navigation}) {

    const [text, onChangeText] = React.useState("name");
    const [phone, onChangePhone] = React.useState("phone");
    const [displayText, setDisplayText] = React.useState(text);
    const [displayPhone, setDisplayPhone] = React.useState(text);
    const [editClicked, setEdit] = React.useState('false');
    const [selectedValue, setSelectedValue] = React.useState("biryani");
    const [descriptionText, setDescription] = React.useState("Add description");
    const [locationLink, setLocation] = React.useState("paste maps link here or enter address");
    const [requestPlaced, setRequestPlaced] = React.useState('false');

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

    const placePickUp = () =>{
        setRequestPlaced(!requestPlaced);
        navigation.navigate('secondstep');
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
                        backgroundColor: "white"
                    }}
                    >
                    <Text
                    style={{
                        fontSize: 20,
                        marginTop: 4,
                        textAlign: 'center',
                        color: '#155F30'
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
                        backgroundColor: "white"
                    }}
                    >
                    <Text
                    style={{
                        fontSize: 20,
                        marginTop: 4,
                        textAlign: 'center',
                        color: '#155F30'
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
                }}>Place the Pickup Request</Text>
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
                defaultValue = "surplus"
                />
            
            </View>
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
            value={descriptionText} />
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
            value={locationLink} />
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