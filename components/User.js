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

export default class User extends React.Component{


	constructor(){
		super()
		this.state = {
			data : []
		}
	}



componentDidMount(){


	const ctx = this;
	fetch('https://nameless-shore45598.herokuapp.com/signin').then((response)=>{
	 	return response.json()
	 }).then((data)=>{
	 	console.log(data)
	 	ctx.setState({data})
	 }).catch(function(error) {
	    console.log('Request failed', error)
	});


	}



	render(){
		return(

			<View>
				<Text> je suis un user</Text>
			</View>


		)
	}


}


