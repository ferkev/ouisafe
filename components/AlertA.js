import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Text } from 'react-native-elements';

import { Icon } from 'expo';


export default class AlertA extends React.Component {

  constructor () {
      super()
  this.state = {
    showComponent: 1,

    person : [
      {FirstName: "François", LastName: "Coucke", Age: "25"}
    ]
  }
}

  render() {
    return (
      <View>
      <Text style={styles.headline}>Ce message pré-rédigé sera envoyé aux contacts enregistrés dans la section Contacts. </Text>
      <View style={styles.background, styles.border}>
      <Text>Bonjour je suis {this.state.person[0].FirstName} {this.state.person[0].LastName} je te contacte car je suis en danger et j'ai besoin d'aide, voici l'endroit où je me trouve actuellement.  </Text>
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
