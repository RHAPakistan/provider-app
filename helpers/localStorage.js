import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextPropTypes } from 'react-native';

module.exports ={
    storeData: async(key, value)=>{
    try {
        await AsyncStorage.setItem(key, value);
        return true;
        } catch (e) {
        // saving error
        console.log(e)
        return false;
        }
    },
    getData: async(key) =>{
    try {
        const value = await AsyncStorage.getItem(key);
        if(value !== null) {
            // value previously stored
            return value
        }
        } catch(e) {
        // error reading value
        console.log(key, " not found in local storage");
        }      
    }    

}
