import React, { useContext, useEffect, useState, useRef } from 'react';
import { LogBox, Text, Pressable, View, Keyboard, Card, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Options from '../components/ManagerOptions/Options';
import { socket, SocketContext } from '../context/socket';
import GlobalStyles from '../styles/GlobalStyles';
import PickupList from '../components/ButtonList/PickupList';
const providerApi = require("../helpers/providerApi.js");

function MyPickups({navigation}) {
	const socket = useContext(SocketContext);
	const [data, setData] = useState([]);
	const [status_no, setStatus] = useState(0);

	useEffect(() => {

		const onMount = navigation.addListener('focus', () => {
			// The screen is focused
			// Call any action and update data
			console.log("Navigated to pickup manager");
			const fetchData = async () => {
				const resp = await providerApi.get_my_pickups();
                if (resp.pickups){
				return resp.pickups;
                }
                else{
                    return {}
                }
			}
			fetchData()
				.then((response) => {
					setData(response);

				})
				.catch((e) => {
					console.log(e);
				})
			//this will add a new request from provider in real time
			socket.on("initiatePickupListen", (socket_data) => {
				console.log("a pickup request initiated by " + socket_data.message._id);
				// data.push(socket_data.message);
				setData((prevState) => {
					var data_copy = [...prevState];
					data_copy.push(socket_data.message);
					return data_copy;
				})

			})
			socket.on("informCancelPickup", (socket_data) => {
				console.log("Pickup cancelled here", socket_data.pickup);
				fetchData()
					.then((response) => {
						setData(response)
					})
					.catch((e) => {
						console.log(e);
					})
			})
			console.log("turning ON sockets => initiatePickupListen | informCancelPickup");
		});

		const onUnmount = navigation.addListener('blur', ()=>{
			console.log("turning off sockets => initiatePickupListen | informCancelPickup");
			socket.off("initiatePickupListen");
			socket.off("informCancelPickup")
		});
		const unsub = () => {
			console.log("remove all listeners");
			onMount();
			onUnmount();

		}
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return () => unsub();
	}, [navigation])


	const onChange = async (query) => {
		// fetch data here;
		if (query.index == 0) {
			const response = await providerApi.get_my_pickups();
			setData(response.pickups);
			setStatus(status_no);
		}
		else {
			const response = await providerApi.get_my_pickups({ "status": query.index});
			setData(response.pickups);
			const indie = query.index - 1;
			setStatus(indie);
			console.log('Pickup Status Changed', query);
			console.log(status_no);
		}
	};

	const onPressHandler = (id) => {
		navigation.navigate('secondstep', { pickup: id });
	};


	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Pickup Manager</Text>
			</View>

			<Options
				onChange={onChange}
				label='Status'
				data={[
					'All',
                    'Finding volunteer',
					'Volunteer on the way',
					'Food Picked',
					'Food Delivered',
					'Cancelled'
				]}
			/>

			<PickupList data={data} onPress={onPressHandler} />
		</Pressable>
    );
}

export default MyPickups;