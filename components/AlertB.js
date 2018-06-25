import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Text } from 'react-native-elements';

import { Icon } from 'expo';


export default class AlertB extends React.Component {

  constructor () {
      super()
  this.state = {
    showComponent: 1,

    person : [
      {FirstName: "Maximilian", LastName: "Schneider", Age: "25"}
    ]
  }
}

  render() {
    return (
      <View>
      <Text style={styles.headline}> Cette message est envoyé aux contactes selectionnés dans la section Contacts et egalement a la police. </Text>
      <View style={styles.background, styles.border}>
      <Text> Hello je suis {this.state.person[0].FirstName} {this.state.person[0].LastName} et j ai besoin des pompiers.  </Text>
        </View>
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
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingTop: '1%',
        marginTop:'0%',
        marginLeft: '5%',
        marginRight: '5%',




  },
  alertheadline: {
      paddingTop: '2%',
      marginTop:'2%',
      marginLeft: '6%',


  },

});
