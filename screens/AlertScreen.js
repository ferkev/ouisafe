import React, { Component } from 'react';
import { Platform, Text, ScrollView, StyleSheet, View, ActivityIndicator, AppRegistry, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView, Marker, Constants, Location, Permissions } from 'expo';
import { Overlay, Divider, Header } from 'react-native-elements';

import AlertLayer from '../components/AlertLayer';


export default class AlertScreen extends Component {
  static navigationOptions = {
    header: null,
  };


  state = {
    location: null,
    errorMessage: null,
    adress: null,
    gps: null,
    isVisible: false,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }

  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(location)
    console.log()

    let adress = await Location.reverseGeocodeAsync({latitude:location.coords.latitude, longitude:location.coords.longitude})
    this.setState({ adress });
    console.log(adress[0].city)

    var gps = adress[0].name + ", " + adress[0].postalCode + ", " + adress[0].city
    this.setState({ gps });
    console.log("gps -->", gps)

  }



  render() {



    /*
    if (this.state.location != null) {
console.log(this.state.location);
      position.push(this.state.location.coords.longitude)
      position.push(this.state.location.coords.latitude)
      console.log ("my position =>", position[0].coords)

      if (position != null) {
        longitude.push(position[0].coords.longitude)
        console.log ("my longitude =>", longitude)

        if (longitude != null) {
          latitude.push(position[0].coords.latitude)
          console.log ("my latitude =>", latitude)
          }

        }
    }*/


/*    console.log(this.state.location) */
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    if(this.state.location && this.state.location.coords.longitude && this.state.location.coords.latitude) {
      return (
        <View style={styles.container}>

        <AlertLayer style={styles.alterstyle} position={this.state.gps}/>

        <Divider style={{ backgroundColor: '#5e7aa9', marginBottom: "10%", marginTop: "5%" }} />

        <MapView
                style={{ flex: 1, marginLeft:"5%", marginRight:"5%"}}
                initialRegion={{
                  latitude: this.state.location.coords.latitude,
                  longitude: this.state.location.coords.longitude,
                  latitudeDelta: 0.009,
                  longitudeDelta: 0.005,
                }}
              >
              <MapView.Marker
              coordinate={this.state.location.coords}
              title="My Marker"
              description="Some description"
              />
          </MapView>
        />;


        </View>)

    } else {
      return (
      <View style={styles.container, styles.horizontal}>
      <ActivityIndicator size="small" color="#c1e7e3" />      </View>);
    }

  }
}

const styles = StyleSheet.create({
radius: {
    height:'50%',
    width:'50%',
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: '20%',
    width: '20%',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  horizontal: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   padding: 10
 },
  map: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    position:'absolute',
  },
  alterstyle: {
    marginTop: "30%",
    paddingTop: '30%',
    position:'absolute',
  },
});
