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



export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
    header: null,
  };

  constructor(){
    super()
    this.state ={
      name : "",
      number : "",
      importContact: [],
      error : []
    }
  }

  onChangeName(text){
    const error = "votre text est trop court ou trop long"
    if(text.length<5 || text.length>10){
      console.log(this.state.error.length)
      if( this.state.error.length<1)
        this.setState({
        error : [...this.state.error, error],

      })
    }
    else if( text.length>5 && text.length<10){
      this.setState({
        name: text,
        error: []
      })

    }
  }

  onChangeNumber(text){
    this.setState({
      number : text
    })
  }




  render(){
          // console.log(this.state.number)
          console.log(this.state.name)
          console.log(this.state.error)
          // console.log(this.state.importContact)
  	return(

      <View>
        <ScrollView style={{ width: "100%" , height: "100%"}}>

        <View style={{ padding : 10, margin: "auto"}}>
          <TextInput value= {this.state.name} onChangeText= {(text)=>{ this.onChangeName(text)}} style={{borderColor: 'gray', borderWidth: 1, marginBottom: 10}} placeholder="Nom du contact max 10 caracteres et min 5" />
          <TextInput   keyboardType = "numeric" value= {this.state.number} onChangeText = {(text)=>{this.onChangeNumber(text)}} style={{borderColor: 'gray', borderWidth: 1}} placeholder="Numero du contact" />
        </View>
        <Button title='AddContact' onPress={()=>{this.props.navigation.navigate('AddMyContact', {
              importContact: this.state.importContact,

            })
        }} />
        </ScrollView>
      </View>

  	)
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
