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
import { MonoText } from '../components/StyledText';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AddMyContactScreen from '../screens/AddMyContactScreen';



export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',


  };


  render(){

  	return(

      <View>
        <ScrollView style={{ width: "100%" , height: "100%"}}>
        <Button title='AddContact' onPress={()=>{this.props.navigation.navigate('AddMyContact')}} />
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

