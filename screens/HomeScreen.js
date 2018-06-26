import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { Overlay, Input, Button, Divider } from 'react-native-elements';
import UserForm from '../components/userForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonRoukin from '../components/button1';



class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
    

  onHandleClick(){
    alert("Ajoutez vos contacts d'alerte dans l'onglet Contacts");
  }

  render() {

    return (
      <View style={styles.container}>
        
        <UserForm isVisible={this.props.isVisible}/>
        
        <View style={styles.ButtonContainerStyle}>
        <ButtonRoukin onPress={this.onHandleClick}/>
        </View>
      </View>
    );
  }

}

function mapStateToProps(state) {
  return { isVisible: state.isVisible }
}

export default connect(
    mapStateToProps,
    null
)(HomeScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  ButtonContainerStyle: {
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 20
  }
});
