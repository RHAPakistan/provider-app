import React from "react";
import { StyleSheet, Text, View, Image, Button, Icon,SafeAreaView, TouchableOpacity, Picker} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import ModalDropdown from "react-native-modal-dropdown";
import ProgressBar from "../components/ProgressBar";

function FinalStep({navigation}) {

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
                <ProgressBar active={4} message="Volunteer has received the pickup" />

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
            <Text style={{
                alignSelf: 'center',
                fontSize: 30,
                margin: 40,
                marginBottom: 0
            }}>{"Thank You"}</Text>
            <Text style={{
                alignSelf: 'center',
                fontSize: 15,
                marginBottom: 40,
                marginLeft: 40,
                marginRight: 40,
                justifyContent: 'center'
            }}>{"We Thank You for giving us the food."}</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("firststep")}} style={{
                borderRadius: 10,
                backgroundColor: '#155F30',
                padding: 15,
                width:"50%",
                margin: 20,
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ color: 'white' }}>Go Back</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
        </ScrollView>
     );
}

export default FinalStep;