import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Button, Icon, SafeAreaView, TouchableOpacity, Picker } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "../styles";
import { SocketContext } from '../../context/socket';
import ProgressBar from "../../components/ProgressBar";
import GlobalStyles from "../../styles/GlobalStyles";
import PickupRequest from "../../components/PickupRequest/index";

function FirstStep({ navigation }) {

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
            <SafeAreaView style={styles.containerDashboard}>
                <View style={GlobalStyles.screenTitle}>
                    <Text style={GlobalStyles.screenTitleText}>First Step</Text>
                </View>
                <ProgressBar active={1} message="Place the Pickup Request" />


            </SafeAreaView>
            <PickupRequest navigation={navigation}/>
        </ScrollView>
    );
}

export default FirstStep;