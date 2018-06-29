import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

class User extends React.Component{


	constructor(props){
		super(props)
		this.state = {
			data : null
		}
	}



componentDidMount(){

	console.log(this.props.user)
	if( this.props.user._id){
		this.setState({
			data : this.props.user
		})
	}

	}



	render(){


		return(

			<View>
			 
			</View>



		)
	}

}


function mapStateToProps(state) {
  return { user : state.user}
}

export default connect(
    mapStateToProps,
    null
)(User);


