import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';

class Login extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		headerTitle: '登录',
		headerTitleStyle:{
			alignSelf: 'center'
		},
		headerRight: (
			<TouchableWithoutFeedback onPress = {() => navigation.navigate('Register')}>
				<View>
					<Text>|  注册</Text>
				</View>
			</TouchableWithoutFeedback>
		)
    });

	render(){
		const navigation = this.props.navigation;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		      <Text>Details Screen</Text>
		    </View>
		);
	}
}

export default Login;
