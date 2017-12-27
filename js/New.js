import React from 'react';
import Dimensions from 'Dimensions';
import { View, Text, Button, TouchableWithoutFeedback, TouchableOpacity, ScrollView, StyleSheet, WebView } from 'react-native';
import { commonstyle, jsonfetch } from './App';
import session from './CommonConfig';

const DimWidth = Dimensions.get('window').width;
const DimHeight = Dimensions.get('window').height;

html = ``;

class New extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		headerTitle: '|  上传',
		headerStyle: {
			backgroundColor: '#F2928A'
		},
		headerTitleStyle: {
			color: 'white'
		},
		headerTintColor: 'white',
		headerRight: (
			<View style = {{flexDirection: 'row'}}>
				<TouchableWithoutFeedback onPress = {() => navigation.navigate('Gallery')}>
					<View>
						<Text style = {commonstyle.rightupperbutton}>图库  </Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress = {() => navigation.navigate('Save', {html: html})}>
					<View>
						<Text style = {commonstyle.rightupperbutton}>|  保存</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
    });

	render(){
		const navigation = this.props.navigation;
		html = session.pageHTML.join('');
		return (
			<View style = {styles.container}>
					<WebView
						style = {{width: DimWidth, height: 700}}
						source = {{html: html, baseUrl: ''}}
						javaScriptEnabled = {false}
					/>
				<View style = {styles.bottomview}>
					<TouchableOpacity style = {styles.bottombutton} onPress = {() => navigation.navigate('Title')}>
						<View>
							<Text style = {styles.buttontext}>标题</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style = {styles.bottombutton} onPress = {() => navigation.navigate('Picture')}>
						<View>
							<Text style = {styles.buttontext}>图片</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style = {styles.bottombutton} onPress = {() => navigation.navigate('Character')}>
						<View>
							<Text style = {styles.buttontext}>文字</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style = {styles.bottombutton} onPress = {() => navigation.navigate('Guide')}>
						<View>
							<Text style = {styles.buttontext}>引导</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style = {styles.bottombutton} onPress = {() => navigation.navigate('Used')}>
						<View>
							<Text style = {styles.buttontext}>用过</Text>
						</View>
					</TouchableOpacity>
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
	mainview: {

	},
	bottomview: {
		height: 50,
		backgroundColor: '#F2928A',
		flexDirection: 'row'
	},
	bottombutton: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'center'
	},
	buttontext: {
		color: 'white'
	}
});

export default New;
