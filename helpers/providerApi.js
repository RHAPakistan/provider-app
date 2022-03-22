import AsyncStorage from '@react-native-async-storage/async-storage';
import { concat } from 'react-native-reanimated';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import {API_URL} from "../config.json";
import {SocketContext, socket, initiateSocketConnection} from "../context/socket";
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

    createPickup: async (pickup_object) =>{
        var tok = await localStorage.getData("auth_token");
        var token = concat("Token ",tok);
        const resp = await fetch(API_URL.concat("/api/provider/pickup/register"),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Token  " + tok 
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
    }
}