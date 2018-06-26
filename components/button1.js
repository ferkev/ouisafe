import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonRoukin extends React.Component{
	constructor(){
super();
	}

	render(){

		return(

			<Button
			      onPress={this.props.onPress}
				  icon={
				    <Icon
				      name='arrow-right'
				      size={15}
				      color='white'
				    />
				  }
				  title='ALERTE'
				  buttonStyle={{
				    backgroundColor: "rgba(92, 99,216, 1)",
				    width: 300,
				    height: 45,
				    borderColor: "transparent",
				    borderWidth: 0,
				    borderRadius: 100
				  }}
				  containerStyle={{ marginTop: 20 }}
				/>
				)
			}

}

export default ButtonRoukin;


