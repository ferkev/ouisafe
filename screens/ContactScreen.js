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
  TextInput
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AddMyContactScreen from '../screens/AddMyContactScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { connect } from 'react-redux';



class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
    header: null,
  };

  constructor(){
    super()
    this.state ={
      errorText : "votre text est trop court ou trop long",
      name : "",
      number : "",
      importContact:
      { 
        contactName: [], contactNumber: []
      },
      error : [],
      data : []
    }

  }


  componentDidMount(){
    var ctx = this;
    fetch(`https://nameless-shore-45598.herokuapp.com/findcontact?userId=${this.props.user._id}`
      ).then(function(response) {
          return response.json();
        }).then(function(data) {
           console.log(data);
           ctx.setState({
              data
           })
        }).catch(function(error) {
          console.log('Request failed', error)
        })
  }


  onChangeName(text){

    if(text.length<5 || text.length>10){
      if( this.state.error.length<1){
        this.setState({
        error : [...this.state.error, this.state.errorText],

        })
      }
    }
    else if( text.length>5 && text.length<10){
        this.setState({
          name: text,
          error: []
        })
      }
  }

  onChangeNumber(number){
    if(number.length<5 || number.length>10){
      if( this.state.error.length<1){
        this.setState({
        error : [...this.state.error, this.state.errorText],

        })
      }

    }
    else if(number.length>5 && number.length<10){
        this.setState({
        number : number,
        error: []
        })
    }
  }

  onHandleSubmit(event){
    event.preventDefault()
    var ctx = this;
    if( this.state.error.length === 0){
      if( this.state.number !== "" || this.state.number !== ""){
        // console.log(this.state.name, this.state.number)
        fetch('https://nameless-shore-45598.herokuapp.com/addcontact', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `contactname=${this.state.name}&telephone=${this.state.number}&contactUserId=${this.props.user._id}`
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
           ctx.setState({
               data : [...ctx.state.data, data]
           })
        }).catch(function(error) {
          console.log('Request failed', error)
        });
      }else{
        alert("les champs sont vides")
      }
    }

  }



  render(){
          console.log(this.props.user)


           const contact = this.state.data.map((element, index)=>{
             return <View key ={index}> 
                        <Text>{element.contactname}</Text> 
                        <Text>{element.telephone}</Text>
                      </View>
           })

          let error;

          if(this.state.error.length > 0 ){
              error = this.state.error.map((element, index)=>{
              return <Text style={{ textAlign : "center"}} key={index}>{element}</Text>
             })
          }

  	return(

      <View style={{ padding : 10, margin: "auto"}}>
        <ScrollView style={{ width: "100%" , height: "100%"}}>
        <View>
          <TextInput value= {this.state.name} onChangeText= {(text)=>{ this.onChangeName(text)}} style={{borderColor: 'gray', borderWidth: 1, marginBottom: 10}} placeholder="Nom du contact max 10 caracteres et min 5" />
          <TextInput   keyboardType = "numeric" value= {this.state.number} onChangeText = {(number)=>{this.onChangeNumber(number)}} style={{borderColor: 'gray', borderWidth: 1}} placeholder="Numero du contact" />
          <Button title="Ajouter un contact" onPress={(event)=>{this.onHandleSubmit(event)}} />
        </View>
        <View>{error}</View>
        <Button title='Importer un contact' onPress={()=>{this.props.navigation.navigate('AddMyContact', {
              importContact: this.state.importContact,

            })
        }} />
        {contact}
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
)(ContactScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
