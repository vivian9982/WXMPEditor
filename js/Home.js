import React from 'react';
import Dimensions from 'Dimensions';
import session from './CommonConfig';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, Alert } from 'react-native';

const DimWidth = Dimensions.get('window').width;
const DimHeight = Dimensions.get('window').height;

class Home extends React.Component{
	static navigationOptions = {
		header: null
    }

	render(){
		const navigation = this.props.navigation;
		var loginButton;
		if(session.user)
			loginButton = (
				<TouchableWithoutFeedback
					onPress = {() => {Alert.alert(session.user, '确认注销？',
								[{text: '注销用户', onPress: () => {session.user = null;session.userId = null;this.forceUpdate();}}
								,{text: '取消'}])}}
				>
					<View style = {styles.loginTouch}>
						<Text style = {styles.login}>  {session.user}   </Text>
					</View>
				</TouchableWithoutFeedback>
			);
		else
			loginButton = (
				<TouchableWithoutFeedback onPress = {() => navigation.navigate('Login')}>
					<View style = {styles.loginTouch}>
						<Text style = {styles.login}>|  登录   </Text>
					</View>
				</TouchableWithoutFeedback>
			);
		return (
			<View style = {styles.container}>
				<View style = {styles.header}>
					<Image source = {require('../img/u26.png')} style = {{flex: 1}} resizeMode = 'contain' />
					<View style = {{flex: 2}}/>
					{loginButton}
				</View>
				<View style = {styles.title}>
					<View style = {{flex: 1}}/>
					<View style = {{flex: 6}}>
						<Image style = {{flex: 2}}source = {require('../img/u22.png')} resizeMode = 'contain' />
						<Text style = {[styles.titlefont, {flex: 1}]}>微信公众号编辑器</Text>
					</View>
				</View>
				<View style = {styles.buttons}>
					<View style = {styles.rowbutton}>
						<View style = {{flex: 1}}/>
						<View style = {{flex: 2, alignItems: 'center'}}>
							<TouchableWithoutFeedback onPress = {() => navigation.navigate('New')}>
								<View style = {styles.button}>
									<Image style = {{flex: 1}} source = {require('../img/u10.png')} resizeMode = 'contain'/>
								</View>
			    			</TouchableWithoutFeedback>
							<Text style = {styles.buttontitle}>新建空白</Text>
						</View>
						<View style = {{flex: 1}}/>
						<View style = {{flex: 2, alignItems: 'center'}}>
							<TouchableWithoutFeedback onPress = {() => navigation.navigate('StyleTypesetting')}>
								<View style = {styles.button}>
									<Image style = {{flex: 1}} source = {require('../img/u12.png')} resizeMode = 'contain'/>
								</View>
							</TouchableWithoutFeedback>
							<Text style = {styles.buttontitle}>风格排版</Text>
						</View>
						<View style = {{flex: 1}}/>
					</View>
					<View style = {styles.rowbutton}>
						<View style = {{flex: 1}}/>
						<View style = {{flex: 2, alignItems: 'center'}}>
							<TouchableWithoutFeedback onPress = {() => navigation.navigate('History')}>
								<View style = {styles.button}>
									<Image style = {{flex: 1}} source = {require('../img/u13.png')} resizeMode = 'contain'/>
								</View>
							</TouchableWithoutFeedback>
							<Text style = {styles.buttontitle}>历史保存</Text>
						</View>
						<View style = {{flex: 1}}/>
						<View style = {[styles.pic], {flex: 3}}>
							<Image style = {{flex: 1}} source = {require('../img/u31.png')} resizeMode = 'contain'/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	login: {
		color: '#666666',
		fontSize: 20,
		textAlign: 'right',
		lineHeight: 40,
		fontWeight: 'bold'
	},
	loginTouch: {
		width: 100
	},
	buttons: {
		flex: 5
	},
	rowbutton: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		flex: 1,
	},
	button: {
		borderColor: '#ffcc99',
		borderWidth: 4,
		borderRadius: 10,
		flex: 3,
		width: DimWidth * 2 / 7,
		alignItems: 'center',
		backgroundColor: '#FFFAF2'
	},
	pic: {
		alignItems: 'center',
		alignSelf: 'center'
	},
	buttontitle: {
		flex: 1,
		textAlign: 'center',
		color: '#666666',
		fontSize: 15
	},
	title: {
		flex: 2,
		flexDirection: 'row'
	},
	titlefont: {
		fontSize: 20,
		color: '#999999'
	}
});

export default Home;
