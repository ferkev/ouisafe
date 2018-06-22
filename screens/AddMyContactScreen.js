import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { MonoText } from '../components/StyledText';


export default class AddMyContactScreen extends React.Component {
  static navigationOptions = {
    title: 'AddMyContact'
  };

  constructor(){
    super()
    this.state = {
      error : " Vous n'avez importé aucun contact",
      contact : []
    }
  }


componentDidMount() {
   this.showFirstContactAsync();
  }

showFirstContactAsync() {

   Expo.Permissions.askAsync(Expo.Permissions.CONTACTS).then((permission)=> {

        console.log(permission.status);
        if(permission.status != "granted"){
           console.log(this.state.error);

        }else{

           Expo.Contacts.getContactsAsync({
           fields : [ Expo.Contacts.PHONE_NUMBERS]

         }).then((results)=>{
          // console.log(results)
              this.setState({
                contact : results
              })

            }).catch((err)=>{
            // console.log(err)
         })

       }

      }).catch((err) => {

            console.log('error:', err);

      });

}

onHandleClick(name, number){


  console.log('coucou', name, number)
}

// onSubmit(){
//   console.log(this.props.navigation)
// }


  render(){


    let number;
    // const icon = {
    //   icon: "md-add-circle"
    // } 

    //<Icon name="ios-add" size={30} color="#4F8EF7" />

            if(this.state.contact.data){

              number = this.state.contact.data.map((contactList , index)=>{

                if(contactList.phoneNumbers[0] != undefined && contactList.name != undefined){
                  
                  return <ListItem  key ={index} 
                          
                        title={contactList.name} 
                        subtitle={contactList.phoneNumbers[0].number}  
                        rightIcon={ <Icon onPress={ ()=>{this.onHandleClick(contactList.name, contactList.phoneNumbers[0].number )}} name="ios-add" size={30} color="#4F8EF7" /> }
                        hideChevron= {false} />
                }

              })

            }

  	return(
  		<View style= {styles.container}>
        <ScrollView style={{width: "100%"}}>
          <View>{number}</View>
        </ScrollView>
  		</View>

  	)
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

});