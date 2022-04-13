import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text_input: {
        fontSize: 16,
        marginTop: '8%',
        borderRadius: 5,
        borderColor: 'black',
        minWidth: '70%',
        maxWidth: '80%',
        backgroundColor: 'white',
        minHeight: 40,
    },
    button: {
        width: 150,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#155F30',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})