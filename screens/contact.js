import * as React from 'react';
import { SafeAreaView } from 'react-native';
import providerApi from '../helpers/providerApi';
import ContactComponent from '../components/ContactComponent';
import { View } from 'react-native-animatable';
function Contact({navigation}) {
    const [contacts, setContacts] = React.useState([]);
    React.useEffect(()=>{
        const fetchData = async()=>{
        const contacts = await providerApi.get_contact()
        return contacts
        }
        fetchData()
        .then((response)=>{
            console.log("resp",response);
            setContacts(response);
        })
        .catch((e)=>{
            console.log("Error: ",e);
            alert("Some error occured :(");
        })
    },[navigation])
    return (
        <SafeAreaView>
            {contacts? 
                contacts.map(contact => (
                    <View key={contact.number}> 
                        <ContactComponent name={contact.name} number={contact.number}></ContactComponent>
                    </View>
                ))
                :
                <View><Text style={styles.nullText}>No drive as of yet.</Text></View> 
            }
        </SafeAreaView>
    );
}

export default Contact;