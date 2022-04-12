import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Form, FormItem, Picker } from 'react-native-form-component';
const providerApi = require('../helpers/providerApi');
// import { styles } from "../screens/styles";
const Signup = ({ navigation, shutDownModal }) => {
	const [fullname,setfullname] = useState("");
	const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
	const [cnic,setcnic] = useState("");
	const [dob,setdob] = useState("");
	const [contactNumber, setcontactNumber] = useState("");
	const [gender, setgender] = useState("male");
	const [occupation,setoccupation] = useState("");
	const [address,setaddress] = useState("");
	const [emergencyContact,setemergencyContact] = useState("");
	const [relationEmergency,setrelationEmergency] = useState("");
	const [fbLink,setfbLink] = useState("");
	const [isVacinated,setisVacinated] = useState("No");
	const [medicalCondition,setmedicalCondition] = useState("");
	const [heardRHAwhere,setheardRHAwhere] = useState("");
	const [contactsInRha,setcontactsInRha] = useState("");
	const [volunteeredOrganizations,setvolunteeredOrganizations] = useState("");
	const [reasonForApply,setreasonForApply] = useState("");
	const [skills,setskills] = useState("");
	const [pickupTiming,setpickupTiming] = useState("");
	const [questions,setquestions] = useState("");

    const placeRequest = async (value)=>{
        console.log("Form Data",value);
        const resp = await providerApi.createProvider(value);
        return resp;
    }
    const onSubmit = (value) => {
		if (value ==false) {
			alert("Kindly fill required fields")
		} 
        else if(value){
            Alert.alert(
                "Request Submission",
                "Are you sure the information is correct?",
                [
                    {
                        text:"Yes",
                        onPress: () => {
                            placeRequest(value)
                            .then((response)=>{
                                //console.log("Response from induction request: ",response);
                                alert("User Registered");
                            })
                            .catch((e)=>{
                                console.log(e);
                            });
                            navigation.goBack();   
                        }
                    },
                    {
                        text:"No",
                        onPress: () => {console.log("Ok pressed")},
                        style:"Cancel"
                    }
                ]
            )
        }
		else {
			console.log("Error occured when submiting form");
		}
	};
    const submitPressed = ()=>{
		if(fullname === "" || email === "" ||cnic === "" ||dob === "" ||contactNumber === "" || gender === "" || address === "" || password=="")
		{
			onSubmit(false)
		}
		else{
			onSubmit({
				fullName: fullname,
				email: email,
				cnic: cnic,
				dateOfBirth: dob,
				contactNumber: contactNumber,
				gender: gender,
				address: address,
                password: password,
                ongoing_pickup: false
			});
		}
	}
    return (
        // <Animatable.View animation="fadeInUp" style={styles.footer}>
		<ScrollView style={styles.scrollContainer}>
			<Form onButtonPress={() => submitPressed()}>
				<FormItem
					label="Fullname"
					isRequired
					value={fullname}
                    placeholder="Full name"
					onChangeText={(fullname) => setfullname(fullname)}
					asterik
					
				/>
				<FormItem
					label="Email"
					isRequired
					value={email}
                    placeholder="Enter Email"
					onChangeText={(email) => setemail(email)}
					asterik
				/>
                <FormItem
					label="Password"
					isRequired
                    placeholder="Enter Password"
					value={password}
					onChangeText={(email) => setPassword(email)}
					asterik
				/>
				<FormItem
					label="cnic"
					isRequired
					value={cnic}
                    placeholder="CNIC"
					onChangeText={(cnic) => setcnic(cnic)}
					asterik
				/>
				<FormItem
					label="Date of Birth"
					isRequired
					value={dob}
                    placeholder="Date of Birth"
					onChangeText={(dob) => setdob(dob)}
					asterik
				/>
				<FormItem
					label="Contact Number"
					isRequired
                    placeholder="Contact Number"
					value={contactNumber}
					onChangeText={(contactNumber) => setcontactNumber(contactNumber)}
					asterik
				/>
				<Picker
					items={[
					{ label: 'Male', value: 'male' },
					{ label: 'Female', value: 'female' },
					{ label: 'Other', value: 'other' },
					]}
					asterik
					label="Gender"
					selectedValue={gender}
					onSelection={(item) => setgender(item.value)}
				/>
				<FormItem
					label="Address"
					isRequired
					value={address}
                    placeholder="Address"
					onChangeText={(address) => setaddress(address)}
					asterik
				/>

			</Form>
			
		</ScrollView>
     // </Animatable.View>
    );
};

export default Signup;

