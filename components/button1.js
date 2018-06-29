import React from 'react';
import { Linking, Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class ButtonRoukin extends React.Component{
	constructor(){
	super();
	}

componentDidMount(){
	console.log(this.props.contact)
}
	handlePress = () => {
		//requete
		console.log("le numero de mon contact : ", this.props.contact);
		console.log("avant l'alerte : ", this.props.gps);
		textWithoutEncoding(this.props.contact, `Hello j ai besoin des pompiers. Je me trouve ici : ${this.props.gps}` )
    //Linking.openURL(`sms:${this.props.contact}`)
   };
	render(){

		return(

			<Button
			      onPress={this.handlePress}
				  icon={
				    <Icon
				      name='arrow-right'
				      size={15}
				      color='white'
				    />
				  }
				  title={'ALERTE'}
				  buttonStyle={{
				    backgroundColor: "rgba(92, 99,216, 1)",
				    width: 300,
				    height: 45,
				    borderColor: "transparent",
				    borderWidth: 0,
				    borderRadius: 100
				  }}
				  containerStyle={{ marginTop: 0, alignItems: 'center', justifyContent: 'center' }}
				/>
				)
			}

}

const mapStateToProps = (globalReducers) => (globalReducers);

export default connect(
	mapStateToProps,
	null
)(ButtonRoukin);


export const textWithoutEncoding = function(phoneNumber = null, body = null) {
	if(arguments.length > 2) {
			console.log('you supplied too many arguments. You can either supply 0 or 1 or 2');
			return;
		}

		let url = 'sms:';

		if(phoneNumber) {
			if(isCorrectType('String', phoneNumber)) {
				url += phoneNumber;
			} else {
				console.log('the phone number should be provided as a string. It was provided as '
					+ Object.prototype.toString.call(phoneNumber).slice(8, -1)
					+ ',ignoring the value provided');
			}
		}

		if(body) {
			if(isCorrectType('String', body)) {
				url += Platform.OS === 'ios' ? `&body=${body}` : `?body=${body}`;
			} else {
				console.log('the body should be provided as a string. It was provided as '
					+ Object.prototype.toString.call(body).slice(8, -1)
					+ ',ignoring the value provided');
			}
		}

		LaunchURL(url);
}
const LaunchURL = function(url) {
	Linking.canOpenURL(url).then(supported => {
		if(!supported) {
			console.log('Can\'t handle url: ' + url);
		} else {
			Linking.openURL(url)
			.catch(err => {
				if(url.includes('telprompt')) {
					// telprompt was cancelled and Linking openURL method sees this as an error
					// it is not a true error so ignore it to prevent apps crashing
					// see https://github.com/anarchicknight/react-native-communications/issues/39
				} else {
					console.warn('openURL error', err)
				}
			});
		}
	}).catch(err => console.warn('An unexpected error happened', err));
};

const isCorrectType = function(expected, actual) {
	return Object.prototype.toString.call(actual).slice(8, -1) === expected;
};


// &body=`Hello je suis ${this.state.person[0].FirstName} ${this.state.person[0].LastName} et j ai besoin des pompiers.`
