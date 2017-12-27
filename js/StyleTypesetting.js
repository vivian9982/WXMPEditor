import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { commonstyle } from './App'

class Business extends React.Component{
	static navigationOptions = {
		tabBarLabel: '商务'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Business</Text>
			</View>
		);
	}
}

class Outdoors extends React.Component{
	static navigationOptions = {
		tabBarLabel: '户外'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Outdoors</Text>
			</View>
		);
	}
}

class Study extends React.Component{
	static navigationOptions = {
		tabBarLabel: '学习'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Study</Text>
			</View>
		);
	}
}

class Others extends React.Component{
	static navigationOptions = {
		tabBarLabel: '其他'
	};

	render(){
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Others</Text>
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
				<Text>Used</Text>
			</View>
		);
	}
}

const RootTabs = TabNavigator({
	Business: {screen: Business},
	Outdoors: {screen: Outdoors},
	Study: {screen: Study},
	Others: {screen: Others},
	Used: {screen: Used}
},
{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
	  style: {
	    backgroundColor: '#F2928A',
	  },
}
});

class StyleTypesetting extends React.Component{
	static navigationOptions = (navigation) => ({
		headerTitle: '',
		headerStyle: {
			backgroundColor: '#F2928A'
		},
		headerTitleStyle: {
			color: 'white'
		},
		headerTintColor: 'white',
		headerRight: (
			<TouchableWithoutFeedback onPress = {() => {}}>
				<View>
					<Text style = {commonstyle.rightupperbutton}>选择   </Text>
				</View>
			</TouchableWithoutFeedback>
		)
    });

	render(){
		const navigation = this.props.navigation;
		return (
			<RootTabs />
		);
	}
}

export default StyleTypesetting;
