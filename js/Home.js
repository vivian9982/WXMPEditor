import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';

class Home extends React.Component{
	static navigationOptions = {
		header: null
    }

	render(){
		const navigation = this.props.navigation;
		return (
			<View style = {styles.container}>
				<View style = {styles.header}>
					<Image source = {require('../img/u26.png')} style = {{flex: 1}} resizeMode = 'stretch' />
					<View style = {{flex: 1}}/>
					<TouchableWithoutFeedback onPress = {() => navigation.navigate('Login')}>
						<View style = {styles.loginTouch}>
	    					<Text style = {styles.login}>|  登录   </Text>
						</View>
	    			</TouchableWithoutFeedback>
				</View>
				<Image source = {require('../img/u22.png')} resizeMode = 'stretch' />
				<Text>微信公众号编辑器</Text>
				<View style = {styles.buttons}>
					<View style = {styles.rowbutton}>
						<View>
							<View style = {styles.button}>
								<TouchableWithoutFeedback onPress = {() => navigation.navigate('New')}>
									<Image source = {require('../img/u10.png')} resizeMode = 'stretch'/>
				    			</TouchableWithoutFeedback>
							</View>
							<Text style = {styles.buttontitle}>新建空白</Text>
						</View>
						<View>
							<View style = {styles.button}>
								<TouchableWithoutFeedback onPress = {() => navigation.navigate('StyleTypesetting')}>
									<Image source = {require('../img/u12.png')} resizeMode = 'stretch'/>
								</TouchableWithoutFeedback>
							</View>
							<Text style = {styles.buttontitle}>风格排版</Text>
						</View>
					</View>
					<View style = {styles.rowbutton}>
						<View>
							<View  style = {styles.button}>
								<TouchableWithoutFeedback onPress = {() => navigation.navigate('History')}>
									<Image source = {require('../img/u10.png')} resizeMode = 'stretch'/>
								</TouchableWithoutFeedback>
							</View>
							<Text style = {styles.buttontitle}>历史保存</Text>
						</View>
						<View style = {styles.pic}>
							<Image source = {require('../img/u30.png')} resizeMode = 'stretch'/>
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
		flex: 1
	},
	rowbutton: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		flex: 1
	},
	button: {
		borderColor: 'red',
		borderWidth: 1
	},
	pic: {

	},
	buttontitle: {
		textAlign: 'center'
	}
});

export default Home;
