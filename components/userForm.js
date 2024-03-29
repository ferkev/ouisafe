import React from 'react';
import { View, ScrollView } from 'react-native';
import { Overlay, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import SignIn from './signIn';
import SignUp from './signUp'
import userForm from './userForm';



class UserForm extends React.Component {
   constructor(props) {
     super(props);
    this.submitSignIn = this.submitSignIn.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  //     fetch('https://nameless-shore-45598.herokuapp.com/signin?email='+values.email+'&password='+values.password)


  submitSignIn(values) {
    var ctx= this;
    fetch(`https://nameless-shore-45598.herokuapp.com/signin?email=${values.email}&password=${values.password}`)
    .then(function(response){
    return response.json();
    })
    .then(function(data) {
      if(data._id){
        ctx.props.onSignInClick(data);
      }
    }).catch(function(error){
      console.log(error)
    });
  }

  submitSignUp(values) {
    var ctx= this;
    fetch('https://nameless-shore-45598.herokuapp.com/signup', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `firstName=${values.firstName}&lastName=${values.lastName}&email=${values.email}&password=${values.password}&telephone=${values.telephone}`

    })
    .then(function(response){
    return response.json();
    })
    .then(function(data) {
      if(data._id){
        ctx.props.onSignUpClick(data);
      }
    }).catch(function(error){
      console.log(error);
    });
  }


  render() {
    console.log(this.props.visible)
    return (
      <View>

      <Overlay isVisible={this.props.visible}>

        <ScrollView>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

           <SignIn onSubmit={this.submitSignIn}/>

          <Divider style={{ backgroundColor: 'blue' }} />

          <SignUp onSubmit={this.submitSignUp}/>

        </View>
        </ScrollView>
      </Overlay>

      </View>);
  }
}


//redux form user.reducer
function mapDispatchToProps(dispatch) {
  return {
    onSignInClick: function(user) {
      dispatch( {type: 'hideModalSignin'});
      dispatch( {type: 'userSignIn', user} )
    },

    onSignUpClick: function() {
      dispatch( {type: 'hideModalSignin'});
      dispatch( {type: 'userSignUp', user} )
  }
}
}

//connecteur redux react
export default connect(
    null,
    mapDispatchToProps
)(UserForm);
