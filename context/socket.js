import * as SecureStore from 'expo-secure-store';
import socketio from "socket.io-client";
import React from "react";
import {SOCKET_URL} from "../config.json";


// export const socket = async() =>{
//     let prov_id = await SecureStore.getItemAsync("provider_id");
//     let sock =   socketio.connect(
//         SOCKET_URL,
//         {query:`_id=${prov_id}`}
//     );
//     return sock;
// }
export const socket = socketio.connect(
    SOCKET_URL
);

socket.on("request id", async (data)=>{
    console.log("received request for provider id");
    let prov_id = await SecureStore.getItemAsync("provider_id");
    socket.emit("send id",{"_id":prov_id});
    socket.off("request id");
})
console.log("Listening");
export const SocketContext = React.createContext();

