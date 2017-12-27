import React from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { commonstyle, toastShort, jsonfetch } from './App';
import { serverURL } from './CommonConfig';
import session from './CommonConfig';

class Login extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		headerTitle: '登录',
		headerTitleStyle:{
			alignSelf: 'center',
			color: 'white'
		},
		headerStyle: {
			backgroundColor: '#F2928A'
		},
		headerTintColor: 'white',
		headerRight: (
			<TouchableWithoutFeedback onPress = {() => navigation.navigate('Register')}>
				<View>
					<Text style = {commonstyle.rightupperbutton}>|  注册</Text>
				</View>
			</TouchableWithoutFeedback>
		)
    });

	constructor(props){
		super(props);
		this.state = {username: '', password: ''};
	}

	check(username, password){
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
		else{
			jsonfetch(
				serverURL,
				'type=login&user=' + username + '&password=' + password,
				(responseJSON) => {
					switch (responseJSON.type) {
						case 'user does not exist':
							toastShort('用户名不存在');
							break;
						case 'password incorrect':
							toastShort('密码错误');
							break;
						case 'login success':
							toastShort('登录成功');
							session.user = username;
							session.userId = responseJSON.id;
							Keyboard.dismiss();
							this.props.navigation.navigate('Home');
							break;
						default:
							toastShort('未知错误');
					}
				}
			);
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
						underlineColorAndroid = 'white'
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
						style = {{backgroundColor: 'white', fontSize: 18, borderWidth: 0.5}}
						onChangeText = {(password) => {
							var ch = password.charAt(password.length - 1);
							if(password == '' || ch == '_' || ('0' <= ch && ch <= '9') || ('a' <= ch && ch < 'z') || ('A' <= ch && ch <= 'Z')){
								this.setState({password: password})
							}
						}}
						value = {this.state.password}
					/>
					<View style = {{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
						<View style = {{flex: 1}}></View>
						<TouchableWithoutFeedback onPress = {() => alert('这都能忘记？')}>
							<View>
								<Text>忘记密码？</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<TouchableOpacity onPress = {this.check.bind(this, this.state.username, this.state.password)}>
						<View style = {{backgroundColor: 'white'}}>
							<Text style = {{textAlign: 'center', borderWidth: 0.6, fontSize: 18, paddingVertical: 10}}>登录</Text>
						</View>
					</TouchableOpacity>
				</View>
		    </View>
		);
	}
}

export default Login;
