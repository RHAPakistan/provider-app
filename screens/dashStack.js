import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "./dashboard";
import FirstStep from "./steps/firstStep";
import SecondStep from "./steps/secondStep";
import Contact from "./contact";
import PrimaryHeader from "../components/ScreenHeaders/PrimaryHeader";


export default function DashStack({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="dashboard"
                component={Dashboard}
                options={({ navigation }) => {
                    return PrimaryHeader(navigation, "Dashboard")
                }}
            />
            <Stack.Screen
                name="firststep"
                component={FirstStep}
                options={{headerShown:false}} />
            <Stack.Screen
                name="secondstep"
                component={SecondStep}
                options={{headerShown:false}} 
                
            />
            <Stack.Screen
                name="contact"
                component={Contact}
            />
        </Stack.Navigator>
    );
}