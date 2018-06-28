import React from 'react';
import { Linking, Text, View } from 'react-native';
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
		console.log("le numero de mon contact : ", this.props.contact)

    Linking.openURL(`sms:${this.props.contact}`)
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


// &body=`Hello je suis ${this.state.person[0].FirstName} ${this.state.person[0].LastName} et j ai besoin des pompiers.`
