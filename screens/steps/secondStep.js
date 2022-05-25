import React, { useEffect } from "react";
import { Text, View, SafeAreaView, Alert } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "../styles";
import ProgressBar from "../../components/ProgressBar";
import GlobalStyles from "../../styles/GlobalStyles";
import PickupDetails from "../../components/detailsForm/PickupDetails";
import ActionBox from "../../components/ActionBox/index";
import socketHelpers from "../../helpers/socketHelpers";
import { socket } from "../../context/socket";
import providerApi from "../../helpers/providerApi";
function SecondStep({ route, navigation }) {

    const [pickup, setPickup] = React.useState(route.params.pickup ? route.params.pickup : {});
    const name = route.params.name?route.params.name:"none";
    const [progressCount, setProgressCount] = React.useState(2);
    const [heading, setHeading] = React.useState("Finding a volunteer");
    const [title, setTitle] = React.useState("Second Step");


    useEffect(() => {

		const onMount = navigation.addListener('focus', () => {

            //get recent data of the pickup
            const fetchDataFromApi = async()=>{
                var current_pickup = (await providerApi.get_my_pickups({_id:pickup._id})).pickups[0];
                return current_pickup;
            }
            fetchDataFromApi()
            .then((response)=>{
                setPickup(response);
                if(pickup.status==0 || pickup.status==1){
                    setProgressCount(2)
                }
                else if(pickup.status==2){
                    setProgressCount(3)
                    setHeading("Volunteer is on the way");
                    setTitle("Third Step");
                }
                else if(pickup.status==3 || pickup.status==4){
                    setHeading("Pickup Finished");
                    setTitle("Final Step");
                    setProgressCount(4);
                }
                else if(pickup.status==5){
                    setHeading("Pickup Cancelled");
                    setTitle("Final Step");
                    setProgressCount(4);
                }
            })

			// The screen is focused
			// Call any action and update data
            console.log("turning on: acceptpickup, informCancelPickup")
            socket.emit("initiatePickup", { "message": pickup });
            socket.on("acceptPickup", (data) => {
                console.log("accept pickup data => ", data);
                setProgressCount((prevState)=> prevState+1);
                setHeading("Volunteer is on the way");
                setTitle("Third Step");
                setPickup(data.message);
                console.log("Turned off listener for request accepted");
                socket.on("foodPicked", (data) => {
                    console.log("Food picked data=>", data);
                    setProgressCount((prevState)=> prevState+1);
                    setHeading("Pickup Finished");
                    setTitle("Final Step");
                    setPickup(data.message);
                })
            });
            
            socket.on("informCancelPickup",(socket_data)=>{
                console.log("pickup cancelled");
                Alert.alert(
                    `Pickup cancelled by ${socket_data.role}`,
                    "Abort the journey",
                    [
                        {
                            text:"Ok, go back to first step",
                            onPress: ()=>{navigation.navigate("firststep")}
                        }   
                    ]
                )
            })
		});

		const onUnmount = navigation.addListener('blur', ()=>{
			console.log("turning off sockets => acceptPickup | foodPicked, informCancelPickup");
            socket.off("acceptPickup");
            socket.off("foodPicked");
            socket.off("informCancelPickup");
		});
        const onUnmountBefore = navigation.addListener('beforeRemove', ()=>{
			console.log("turning off sockets => acceptPickup | foodPicked, informCancelPickup");
            socket.off("acceptPickup");
            socket.off("foodPicked");
            socket.off("informCancelPickup");
		});
		const unsub = () => {
			console.log("remove all listeners");
			onMount();
			onUnmount();
            onUnmountBefore();

		}
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return () => unsub();
	}, [navigation])
    // Process Data Here

    const data = {
        BOOKING_TIME: pickup.placementTime,
        CONTACT_NAME: name,
        CONTACT_PHONE: pickup.phone,
        PICKUP_LOCATION: pickup.pickupAddress,
        SURPLUS_TYPE: pickup.typeOfFood,
        DESCRIPTION: pickup.description
    };
    const cancelPickUp = () => {
        socketHelpers.cancel_pickup(pickup, 0, "provider");
        navigation.navigate("firststep");
    }
    const ButtonRender = (props) => {

        if (props.progressCount <4) {
            return (
                <View>
                <ActionBox
                    type="cancel"
                    title="Cancel Pickup"
                    action={cancelPickUp}
                />
                <ActionBox
                    type= "primary"
                    title="Contact Volunteer"
                    action = {()=>{console.log("contact volunteer pressed")}}
                />
                </View>
            );
        }
        else if (props.progressCount == 4) {
            return <ActionBox
            type= "primary"
            title="Go to Dashboard"
            action = {()=>{navigation.navigate("dashboard")}}
            />
                }
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.detailsContainer}>
                <View style={GlobalStyles.screenTitle}>
                    <Text style={GlobalStyles.screenTitleText}>{title}</Text>
                </View>
                <ProgressBar active={progressCount} message={heading} />
                <View style={{
                    alignItems: "flex-start",
                    flexDirection: "row",
                    width: '95%',
                    borderBottomColor: '#155F30',
                    borderBottomWidth: 1,
                    justifyContent: "space-between"
                }}>
                    <Text style={{ fontSize: 20, paddingTop: 10, paddingLeft: 10 }}>Pickup Details</Text>
                </View>
                <View style={{ "flex": 1 }}>
                    <PickupDetails data={data} />
                </View>


                <ButtonRender progressCount={progressCount} />


            </SafeAreaView>
        </ScrollView>
    );
}

export default SecondStep;