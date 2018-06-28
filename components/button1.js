import React from 'react';
import { Linking, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonRoukin extends React.Component{
	constructor(){
	super();
	handlePress = () => {
		console.log("Link clicked for " + this.props.href);
		Linking.openURL(this.props.href);
		this.props.onPress && this.props.onPress();
	};
	}

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
				  title={this.props.title}
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

export default class Alert extends React.Component {
  render() {
    return (
      <View style={{marginVertical: 300,}}>
        <ButtonRoukin href="sms:+33668098791" title="ALERTE" />
      </View>
    );

  }
}
