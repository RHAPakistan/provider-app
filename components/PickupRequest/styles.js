import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({


    containerDashboard: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    contactInfo: {
        alignItems: "flex-start",
        flexDirection: "row",
        width: '95%',
        borderBottomColor: '#155F30',
        borderBottomWidth: 1,
        justifyContent: "space-between"
    },
    contactInfoText: {
        fontSize: 20, paddingTop: 10, paddingLeft: 10
    },
    namePhone: {
        padding: 5,
        marginTop: 5
    },

    contactInfoSec: {
        alignItems: "flex-start",
        flexDirection: 'row',
        padding: 10,
        justifyContent: "space-between",
        width: "95%"
    },
    textInput: {
        width: '80%',
        backgroundColor: 'white',
        padding: 5,
        margin: 4,
        borderWidth: 1,
        borderRadius: 10
    },
    surplus:{
        width: '95%',
        backgroundColor: 'white',
        padding: 5,
        margin: 4,
        borderWidth: 1,
        borderRadius: 10        
    },
    textBox: {
        marginLeft: 10,
        padding: 5,
        width: '95%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10
    },
    descriptionBox: {
        marginLeft: 10,
        padding: 5,
        width: '95%',
        height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10
    },
    headingText: {
        alignItems: 'center',
        padding: 10,
        paddingTop:15,
        marginTop: 5
    },
    foodInfo: {
        alignItems: "flex-start",
        flexDirection: "row",
        width: '95%',
        justifyContent: "space-between"
    },
    placePickupButton: {
        borderRadius: 10,
        backgroundColor: '#155F30',
        padding: 15,
        width: "50%",
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center'
    }
});

export default styles;
