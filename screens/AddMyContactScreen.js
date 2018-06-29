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
import { connect } from 'react-redux';



class AddMyContactScreen extends React.Component {
  static navigationOptions = {
    title: 'AddMyContact'
  };

  constructor(props){
    super(props)
    this.state = {
      error : " Vous n'avez importé aucun contact",
      contact : [],
      importedContact: this.props.navigation.state.params.importContact,
      index: 0
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

onHandleClick(name, number, index){
  // console.log(index)
  var ctx = this;

  if(this.state.importedContact.contactName.indexOf(name) < 0){
    this.setState({
      importedContact :{
          contactName:  [...this.state.importedContact.contactName, name],
          contactNumber : [...this.state.importedContact.contactNumber, number]
      }

    })
    console.log(name)
    fetch('https://nameless-shore-45598.herokuapp.com/addcontact', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `contactname=${name}&telephone=${number}&contactUserId=${this.props.user._id}`
        })
        
      alert('Contact ajouté')
  }
  // console.log(this.props.navigation)
}

// onSubmit(){
//   console.log(this.props.navigation)
// }

  

  render(){
          // console.log(this.state.importedContact.contactName[this.state.index])
    // console.log(this.state.importedContact.contactName, this.state.importedContact.contactNumber)
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
            rightIcon={ <Icon onPress={ ()=>{this.onHandleClick(contactList.name, contactList.phoneNumbers[0].number, index )}} name="ios-add" size={30} color="#4F8EF7" /> }
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

function mapStateToProps(state) {
  return { user : state.user}
}

export default connect(
    mapStateToProps,
    null
)(AddMyContactScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

});