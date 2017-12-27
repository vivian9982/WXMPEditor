import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { commonstyle } from './App'

class Used extends React.Component{
	static navigationOptions = (navigation) => ({
		headerTitle: '',
		headerStyle: {
			backgroundColor: '#F2928A'
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
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		      <Text>Details Screen</Text>
		    </View>
		);
	}
}

export default Used;
