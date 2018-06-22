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


  };

  constructor(){
    super()
    this.state ={
      name : "",
      number : ""
    }
  }

  onChangeName(text){
    this.setState({
      name : text
    })
  }

  onChangeNumber(text){
    console.log(text)
    this.setState({
      number : text
    })
  }


  render(){
          console.log(this.state.name)
          console.log(this.state.number)
  	return(

      <View>
        <ScrollView style={{ width: "100%" , height: "100%"}}>

        <View style={{ padding : 10, margin: "auto"}}>
          <TextInput value= {this.state.name} onChangeText= {(text)=>{ this.onChangeName(text)}} style={{borderColor: 'gray', borderWidth: 1, marginBottom: 10}} placeholder="Nom du contact" />
          <TextInput   keyboardType = "numeric" value= {this.state.number} onChangeText = {(text)=>{this.onChangeNumber(text)}} style={{borderColor: 'gray', borderWidth: 1}} placeholder="Numero du contact" />
        </View>
        <Button title='AddContact' onPress={()=>{this.props.navigation.navigate('AddMyContact', {
              itemId: 86,
              otherParam: 'anything you want here',
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

