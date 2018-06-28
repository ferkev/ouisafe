import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Text, ButtonGroup } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import { Icon } from 'expo';

import AlertA from '../components/AlertA';
import AlertB from '../components/AlertB';



export default class AlertLayer extends React.Component {
  static navigationOptions = {
    title: 'AlertLayer'
  };

constructor () {
    super()
this.state = {
  showComponent: 1,

  person : [
    {FirstName: "Maximilian", LastName: "Schneider", Age: "25"}
  ]
}
this.ChangeToA = this.ChangeToA.bind(this)
this.ChangeToB = this.ChangeToB.bind(this)
this.updateIndex = this.updateIndex.bind(this)


}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

ChangeToA(){
  this.setState({showComponent : 1})
  console.log("change to a is working")
}

ChangeToB(){
  this.setState({showComponent : 2});
  console.log("change to b is working")

}







  render() {
    const DisplayA = () => <Text       onPress={this.ChangeToA}>Securité</Text>
    const DisplayB = () => <Text       onPress={this.ChangeToB}>Santé</Text>

    const buttons = [{ element: DisplayA}, { element: DisplayB }]
    const { selectedIndex } = this.state

    if(this.ChangeToA){
      console.log("")
    }

    var alert;
    if(this.state.showComponent == 1) {
        alert = <AlertA/>
    } else if (this.state.showComponent == 2){
      alert = <AlertB/>
    } 

    console.log("mon gps -->", this.props.position)
    return (
      <View>
      <ButtonGroup
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 30, backgroundColor:"#9fe1b1"}}
      
       />

      {alert}


      <Text  style={styles.headline}> Mon GPS: {this.props.position}  </Text>


      </View>

    );
  }
}

const styles = StyleSheet.create({
border: {
  borderRadius: 4,
     borderWidth: 3,
     borderColor: '#9fe1b1',
     backgroundColor: '#fff',
     borderRadius: 10,
     marginTop: '5%',
     marginBottom: '5%',
     marginLeft: '5%',
     marginRight: '10%',
     paddingTop: '5%',
     paddingBottom: '5%',
     paddingLeft: '3%',
     paddingRight: '3%',

   },

  headline: {
        alignItems: 'center',
        paddingLeft: '6%',
        paddingRight: '0%',
        marginRight: '6%',




  },
  alertheadline: {
      paddingTop: '2%',
      marginTop:'2%',
      marginLeft: '6%',


  },

});
