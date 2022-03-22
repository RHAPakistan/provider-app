import React from 'react';
import { View } from 'react-native';

import TextLine from '../TextLine';
import ButtonLine from '../ButtonLine';
import TextLineClickable from '../TextLineClickable';
import ButtonToTextClickable from '../ButtonToTextClickable';
import TextDescription from '../TextDescription';

import styles from "../styles";

const PickupDetails = ({ data }) => {
	let indexOffset = 1;

	let CompletionLine =
		data.COMPLETION_TIME || data.CANCELLATION_TIME ? (
			data.COMPLETION_TIME ? (
				<TextLine
					index={indexOffset}
					label='Completion Time'
					value={data.COMPLETION_TIME}
				/>
			) : (
				<TextLine
					index={indexOffset}
					label='Cancellation Time'
					value={data.CANCELLATION_TIME}
				/>
			)
		) : null;
	indexOffset = CompletionLine ? 1 : 0;

	// let ProviderLine =
	// 	data.PROVIDER.type === 'Registered' ? (
	// 		<TextLineClickable
	// 			index={indexOffset + 3}
	// 			label='Vendor Name'
	// 			value={data.PROVIDER.name}
	// 			action={data.PROVIDER.action}
	// 		/>
	// 	) : (
	// 		<TextLine
	// 			index={indexOffset + 3}
	// 			label='Vendor Type'
	// 			value={data.PROVIDER.type}
	// 		/>
	// 	);
	return (
		<View>
			{/* Booking Time: When Pickup is created */}
			<TextLine index={0} label='Booking Time' value={data.BOOKING_TIME} />

			{/* If Pickuo is cancelled or completed */}
			{CompletionLine}

			{/* Contact Name */}
			<TextLine
				index={indexOffset + 1}
				label='Contact Name'
				value={data.CONTACT_NAME}
			/>

			{/* contact phone number, and go to dialer if clicked */}
			<TextLineClickable
				index={indexOffset + 2}
				label='Contact Phone'
				value={data.CONTACT_PHONE}
				action={() => console.log('Phone Number Clicked')}
			/>

			


			{/* vendor/provider name or Type if Guest */}
			{/* {ProviderLine} */}

			{/* Go to google map when clicked to find the location */}
			{/* <ButtonLine
				index={indexOffset + 4}
				label='Pickup Location'
				title='Map'
				action={data.PICKUP_LOCATION}
			/> */}

			{/*textbox that holds the value of the pickup pickupAddress*/}
			<TextLineClickable
				index={indexOffset + 4}
				label='Pickup Location'
				value={data.PICKUP_LOCATION}
				action={() => console.log('Pickup location clicked')}
			/>

			{/* Surplus type */}
			<TextLine
				index={indexOffset + 5}
				label='Surplus Type'
				value={data.SURPLUS_TYPE}
			/>

			{/* Food Description */}
			<TextDescription
				index={indexOffset + 6}
				label='Food Description'
				value={data.DESCRIPTION}
			/>

			{/* Admin Actions Starts here */}
			<View style={styles.splitter}></View>


		</View>
	);
};

export default PickupDetails;
