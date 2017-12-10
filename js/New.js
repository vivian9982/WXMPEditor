import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { TabNavigator } from 'react-navigation';

class Titles extends React.Component{
	static navigationOptions = {
		tabBarLabel: '标题'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Titles</Text>
			</View>
		);
	}
}

class Characters extends React.Component{
	static navigationOptions = {
		tabBarLabel: '文字'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Characters</Text>
			</View>
		);
	}
}

class Picture extends React.Component{
	static navigationOptions = {
		tabBarLabel: '图片'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Picture</Text>
			</View>
		);
	}
}

class Guide extends React.Component{
	static navigationOptions = {
		tabBarLabel: '引导'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Guide</Text>
			</View>
		);
	}
}

class Used extends React.Component{
	static navigationOptions = {
		tabBarLabel: '用过'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
			</View>
		);
	}
}

const RootTabs = TabNavigator({
	Titles: {screen: Titles},
	Characters: {screen: Characters},
	Picture: {screen: Picture},
	Guide: {screen: Guide},
	Used: {screen: Used}
},
{
  tabBarPosition: 'bottom'
});

class New extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		headerTitle: '|  上传',
		headerRight: (
			<View style = {{flexDirection: 'row'}}>
				<TouchableWithoutFeedback onPress = {() => navigation.navigate('Gallery')}>
					<View>
						<Text>图库  </Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress = {() => {}}>
					<View>
						<Text>|  保存</Text>
					</View>
				</TouchableWithoutFeedback>

			</View>
		)
    });

	render(){
		const navigation = this.props.navigation;
		return (
			<RootTabs />
		);
	}
}

export default New;
