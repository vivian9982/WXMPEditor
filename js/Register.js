import React from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { commonstyle } from './App';
import { serverURL } from './CommonConfig';
import session from './CommonConfig';
import { toastShort } from './App';

class Register extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		headerTitle: '注册',
		headerTitleStyle: {
			alignSelf: 'center',
			color: 'white'
		},
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#F2928A'
		}
    });

		constructor(props){
			super(props);
			this.state = {username: '', password: '', repeatpass: ''};
		}

		check(username, password, repeatpass){
			if(username == '')
				toastShort('帐号不能为空');
			else
			if(password == '')
				toastShort('密码不能为空');
			else
			if(username.length < 4)
				toastShort('帐号长度至少为4位');
			else
			if(password.length < 4)
				toastShort('密码长度至少为4位');
			else
			if(username.length > 20)
				toastShort('帐号长度不能超过20位');
			else
			if(password.length > 20)
				toastShort('密码长度不能超过20位');
			else
			if(password != repeatpass)
				toastShort('两次输入的密码不一致');
			else{
				fetch(serverURL, {
					//change here
					method: 'POST',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: 'type=register&user=' + username + '&password=' + password
				})
					.then((response) => response.json())
					.then((responseJSON) => {
						switch (responseJSON.type) {
							case 'user has been existed':
								toastShort('用户名已存在');
								break;
							case 'register success':
								toastShort('注册成功');
								Keyboard.dismiss();
								this.props.navigation.navigate('Login');
								break;
							default:
								toastShort('未知错误');
						}
					})
					.catch((error) =>  {
						toastShort('服务器连接失败，请确定您的网络环境');
					})
			}
		}

	render(){
		const navigation = this.props.navigation;
		return (
			<View style={{flex: 1, backgroundColor: '#FFFAF2'}}>
				<View style = {{paddingVertical: 50, paddingHorizontal: 40}}>
			    	<TextInput
						placeholder = '请输入用户名'
						keyboardType = 'email-address'
						clearButtonMode = 'while-editing'
						underlineColorAndroid = 'transparent'
						style = {{backgroundColor: 'white', fontSize: 18, borderWidth: 0.5, marginBottom: 30}}
						onChangeText = {(username) => {
							var ch = username.charAt(username.length - 1);
							if(username == '' || ch == '_' || ('0' <= ch && ch <= '9') || ('a' <= ch && ch < 'z') || ('A' <= ch && ch <= 'Z')){
								this.setState({username: username});
							}
						}}
						value = {this.state.username}
					/>
					<TextInput
						placeholder = '请输入密码'
						clearButtonMode = 'while-editing'
						underlineColorAndroid = 'white'
						secureTextEntry = {true}
						style = {{backgroundColor: 'white', fontSize: 18, borderWidth: 0.5, marginBottom: 30}}
						onChangeText = {(password) => {
							var ch = password.charAt(password.length - 1);
							if(password == '' || ch == '_' || ('0' <= ch && ch <= '9') || ('a' <= ch && ch < 'z') || ('A' <= ch && ch <= 'Z')){
								this.setState({password: password})
							}
						}}
						value = {this.state.password}
					/>
					<TextInput
						placeholder = '请再次输入密码'
						clearButtonMode = 'while-editing'
						underlineColorAndroid = 'white'
						secureTextEntry = {true}
						style = {{backgroundColor: 'white', fontSize: 18, borderWidth: 0.5, marginBottom: 50}}
						onChangeText = {(repeatpass) => {
							var ch = repeatpass.charAt(repeatpass.length - 1);
							if(repeatpass == '' || ch == '_' || ('0' <= ch && ch <= '9') || ('a' <= ch && ch < 'z') || ('A' <= ch && ch <= 'Z')){
								this.setState({repeatpass: repeatpass})
							}
						}}
						value = {this.state.repeatpass}
					/>

					<TouchableOpacity onPress = {this.check.bind(this, this.state.username, this.state.password, this.state.repeatpass)}>
						<View style = {{backgroundColor: 'white'}}>
							<Text style = {{textAlign: 'center', borderWidth: 0.6, fontSize: 18, paddingVertical: 10}}>注册</Text>
						</View>
					</TouchableOpacity>
				</View>
				</View>
		);
	}
}

export default Register;
