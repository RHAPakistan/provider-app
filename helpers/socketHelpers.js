import {socket} from "../context/socket";


module.exports={

    place_pickup: async (navigation) =>{
        socket.on("acceptPickup", (data) => {
            console.log("accept pickup data => ", data);
            navigation.navigate("thirdstep", {pickup: data.message});
            socket.off("acceptPickup");
            console.log("Turned off listener for request accepted");
            socket.on("foodPicked", (data) => {
                console.log("Food picked data=>", data);
                navigation.navigate("finalstep", {pickup: data.message});
                socket.off("foodPicked");
                console.log("Turned off listener for food picked");
            })
        });
    },

    initiate_pickup: async (navigation, pickup_object, pickup_returned, name) =>{
        console.log("-=-------", pickup_returned);
        socket.emit("initiatePickup", { "message": pickup_returned });
        var pickup_object_send = {...pickup_object};
        pickup_object_send["name"] = name;
        navigation.navigate('secondstep', {pickup: pickup_object_send});       
    }
}