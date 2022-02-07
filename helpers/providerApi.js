import * as SecureStore from 'expo-secure-store';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import {API_URL} from "../config.json";
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
            // console.log(json.status);
            // if (response.status==200){
            //     console.log("200")
            //     var json = await response.json()
            // }
            //console.log(json);
            
            if (json){
                console.log(json);
                await SecureStore.setItemAsync('auth_token',json.token);
                await SecureStore.setItemAsync('provider_id',json._id);
                return true
            }else{
                return false
            }
            // const token = await SecureStore.getItemAsync('auth_token');
            // console.log(token);
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        return resp
    },

    createPickup: async (pickup_object) =>{
        const resp = await fetch(API_URL.concat("/api/provider/pickup/register"),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': await SecureStore.getItemAsync("auth_token") 
              },
              body: JSON.stringify(pickup_object)
        })
        .then(async (response) => {
            if (response.status>=500){
                console.log("Bad request from server at createPickup");
                return response.text();
            }
            return response.json();
        })            
        .then(async (json) => {
            // console.log(json);
            if (json.alreadyExists){
                console.log("Pickup already exists");
                return false
            }else{
                return true
            }
        })
        .catch(async (e) => console.log(e))
        return resp;
    }
}