import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AddMyContactScreen from '../screens/AddMyContactScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';


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
    else if(number.length>5 && number.length<11){
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
      if( this.state.number !== "" || this.state.number !== "" && this.props.user._id){
        this.props.dispatchContact(this.state.number)

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
    if(this.props.user._id){
      var ctx = this;
      fetch(`https://nameless-shore-45598.herokuapp.com/findcontact?userId=${this.props.user._id}`
      ).then(function(response) {
          return response.json();
        }).then(function(data) {
           ctx.setState({
              data
           })
        }).catch(function(error) {
          console.log('Request failed', error)
        })
    }


           const contact = this.state.data.map((element, index)=>{
             return <View key ={index} style= {{ backgroundColor: '#5e7aa9', borderRadius: 5, marginTop: 5, marginBottom: 5}}> 
                        <Text style={{color:"#fff" }}>{element.contactname}</Text> 
                        <Text style={{color: "#fff"}}>{element.telephone}</Text>
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
          <TextInput value= {this.state.name} onChangeText= {(text)=>{ this.onChangeName(text)}} style={{borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5, padding: 10}} placeholder="Nom du contact max 10 caracteres et min 5" />
          <TextInput   keyboardType = "numeric" value= {this.state.number} onChangeText = {(number)=>{this.onChangeNumber(number)}} style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10}} placeholder="Numero du contact" />
          <View>{error}</View>
          <Button  title="Ajouter un contact" onPress={(event)=>{this.onHandleSubmit(event)}} buttonStyle={{
            backgroundColor: "#13f6af",
            width: 180,
            height: 38,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 8, 
            marginLeft : 'auto',
            marginRight : 'auto',
            marginBottom: 5,
            marginTop: 5,
          }}/>
        </View>
        <Button  title='Importer un contact' onPress={()=>{this.props.navigation.navigate('AddMyContact', {
              importContact: this.state.importContact,

            })
        }} buttonStyle={{
            backgroundColor: "#13f6af",
            width: 180,
            height: 38,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 8,
            marginLeft : 'auto',
            marginRight : 'auto',
            marginBottom: 5,
            marginTop: 5,
          }} />
        <View style={styles.container}>
          {contact}
        </View>
        </ScrollView>
      </View>

  	)
  }
}

function mapStateToProps(state) {
  return { user : state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchContact : telcontact => {
      dispatch({"type":"newContact", "contact":telcontact})
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
