import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyPickups from "./myPickups";
import DashStack from "./dashStack";
import PrimaryHeader from "../components/ScreenHeaders/PrimaryHeader";
import CustomDrawerContent from "../components/CustomDrawerContent";


export default function Drawer() {

  const RootDrawerNavigator = createDrawerNavigator();
  const DrawerStyles = {
    drawerActiveBackgroundColor: Colors.lightGreen,
    drawerActiveTintColor: Colors.white,
    drawerInactiveTintColor: Colors.green,
    drawerItemStyle: {
      marginHorizontal: 0,
      marginVertical: 0,
      height: 48,
      borderRadius: 0,
    },
    drawerLabelStyle: {
      marginHorizontal: 8,
      fontSize: 16,
    },
  };
  return (
    <RootDrawerNavigator.Navigator
      initialRouteName="Dashboard"
      screenOptions={DrawerStyles}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <RootDrawerNavigator.Screen
        name='Dashboard' component={DashStack}
        options={{ headerShown: false }}
      />
       <RootDrawerNavigator.Screen
        name='MyPickups' component={MyPickups}
        options={({ navigation }) => {
          return PrimaryHeader(navigation, "My Pickups");
        }} />
    </RootDrawerNavigator.Navigator>

  );
}