import React from 'react';
import { View, Text, Button } from 'react-native';

class Register extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		headerTitle: '注册',
		headerTitleStyle:{
			alignSelf: 'center'
		},
		headerRight: (
			<Text></Text>
		)
    });

	render(){
		const navigation = this.props.navigation;
		return (
			<Text>123123</Text>
		);
	}
}

export default Register;
