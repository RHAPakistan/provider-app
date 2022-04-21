import AsyncStorage from '@react-native-async-storage/async-storage';
import { concat } from 'react-native-reanimated';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import {API_URL} from "../config.json";
import {SocketContext, socket, initiateSocketConnection} from "../context/socket";
import * as Device from 'expo-device';
import * as Notifications from "expo-notifications";
const localStorage = require("../helpers/localStorage");


module.exports = {
    //this funtion returns true if the user is valid else false
    //the funtion also adds the token to secure storage as "auth_token"
    signin: async (email, password) => {
        const resp = await fetch(API_URL.concat("/api/provider/signin/"), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password
              })
        })
        .then((response) => {
            console.log(response.status);
            if (response.status=='200'){
                //navigation.navigate("Drawer");
                return response.json()
            }else{
                console.log("not authorized");
            }
            //return response.json()
        })
        .then(async (json) => {
            console.log("succesful network request");
            if (json){
                await localStorage.storeData('auth_token',json.token);
                await localStorage.storeData('provider_id',json._id);
                await localStorage.storeData('name',json.fullName);
                await localStorage.storeData('phone',json.contactNumber);
                console.log("initiating Socket connection");
                initiateSocketConnection();
                if (Device.isDevice) {
                    const { status: existingStatus } = await Notifications.getPermissionsAsync();
                    let finalStatus = existingStatus;
                    if (existingStatus !== 'granted') {
                      const { status } = await Notifications.requestPermissionsAsync();
                      finalStatus = status;
                    }
                    if (finalStatus !== 'granted') {
                      alert('Failed to get push token for push notification!');
                      return;
                    }
                    const token = (await Notifications.getExpoPushTokenAsync()).data;
                    console.log(token);
                    // this.setState({ expoPushToken: token });
                    let uid = await localStorage.getData("provider_id");
                    module.exports.send_push_token(uid,token);
                  } else {
                    alert('Must use physical device for Push Notifications');
                  }
                
                  if (Platform.OS === 'android') {
                    Notifications.setNotificationChannelAsync('default', {
                      name: 'default',
                      importance: Notifications.AndroidImportance.MAX,
                      vibrationPattern: [0, 250, 250, 250],
                      lightColor: '#FF231F7C',
                    });
                  }
                return true
            }else{
                return false
            }
            
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        return resp
    },

    createProvider: async(provider_data) =>{
        var tok = await localStorage.getData("auth_token");
        var token = concat("Token ", tok);
        const resp = await fetch(API_URL.concat("/api/provider/register"),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Token  " +tok 
              },
              body: JSON.stringify(provider_data)
        })
        .then(async (response) => {
            if (response.status>=400){
                console.log("Bad request from server at createProvider");
                return [false, response.status];
            }
            return response.json();
        })            
        .then(async (json) => {
            return json;
        })
        .catch(async (e) => console.log(e))
        return resp; 
    },
    createPickup: async (pickup_object) =>{
        var tok = await localStorage.getData("auth_token");
        console.log("Token is:",tok);
        var token = concat("Token ",tok);
        const resp = await fetch(API_URL.concat("/api/provider/pickup/register"),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Token  " +tok 
              },
              body: JSON.stringify(pickup_object)
        })
        .then(async (response) => {
            if (response.status>=400){
                console.log("Bad request from server at createPickup");
                return [false, response.status];
            }
            return response.json();
        })            
        .then(async (json) => {
            if(!json){return [false, false]}
            if (json.alreadyExists){
                console.log("Pickup already exists");
                return [false, "already exists"]
            }else{
                return [true, json.pickup];
            }
        })
        .catch(async (e) => console.log(e))
        return resp;
    },
    get_my_pickups:async (query) =>{
        var query_string = API_URL.concat("/api/admin/pickup?");
        // query_string = query?query_string.concat(`?status=${query.status?query.status:0}`):query_string;
        // console.log(query_string);
        const id = await localStorage.getData('provider_id');
        for(const key in query){
            query_string = query_string.concat(`${key}=${query[key]}&`);
        }
        query_string = query_string.concat(`provider=${id}`);
        console.log(query_string);
        const resp = await fetch(query_string, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
    return resp;
    },

    auth_forgot: async (email) =>{
        const resp = await fetch(API_URL.concat('/api/provider/auth/forgot'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then((response)=>{
            console.log("Auth Forget res: ",response)
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
        return resp;
    },
    auth_forgot_verifyOTP: async (email, otp) =>{
        const resp = await fetch(API_URL.concat('/api/provider/auth/forgot/verifyOTP'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, otp: otp})
        })
        .then((response)=>{
            console.log("Auth Forget verify res: ",response)
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
        return resp;
    },

    auth_forgot_changePassword: async (email, otp, password) =>{
        const resp = await fetch(API_URL.concat('/api/provider/auth/forgot/changePassword'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, otp: otp, newPassword: password})
        })
        .then((response)=>{
            console.log("Auth Forget change pass res: ",response)
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
        return resp;
    },

    send_push_token: async(userId, pushToken)=>{
        const token = await localStorage.getData('auth_token');
        const resp = await fetch(API_URL.concat(`/api/admin/notifications/login`), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                userId: userId,
                token: pushToken,
                userType: "provider"
            })
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
        return resp;
    },
    
    get_contact: async()=>{
        const token = await localStorage.getData('auth_token');
        const resp = await fetch(API_URL.concat(`/api/provider/getContact`), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e)=>{
            console.log(e);
        })
        return resp;
    }
}