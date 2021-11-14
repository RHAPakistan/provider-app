import {StyleSheet,Platform} from 'react-native';

export const styles = StyleSheet.create({
    button: {
        width: 280,
        height: 40,
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
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    action: {
        alignItems: "flex-start",
        flexDirection: "row",
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
});