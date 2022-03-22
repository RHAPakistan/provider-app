 import React from "react";
import { StyleSheet, Text, View, Image, Button, Icon, SafeAreaView, TouchableOpacity, Picker } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "../styles";
import ModalDropdown from "react-native-modal-dropdown";
import ProgressBar from "../../components/ProgressBar";
import GlobalStyles from "../../styles/GlobalStyles";
import ActionBox from "../../components/ActionBox";
import PickupDetails from "../../components/detailsForm/PickupDetails";

function FinalStep({ route, navigation }) {

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

    const cancelPickUp = () => {
        navigation.navigate("firststep");
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.detailsContainer}>
                <View style={GlobalStyles.screenTitle}>
                    <Text style={GlobalStyles.screenTitleText}>Done!</Text>
                </View>
                <ProgressBar active={4} message="Volunteer has received the pickup" />

                <View style={{"flex":1}}>

                    <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Pickup Details</Text>

                <PickupDetails data={data}/>

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
                <TouchableOpacity onPress={() => { navigation.navigate("firststep") }} style={{
                    borderRadius: 10,
                    backgroundColor: '#155F30',
                    padding: 15,
                    width: "50%",
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