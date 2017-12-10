import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';

class StyleTypesetting extends React.Component{
	static navigationOptions = (navigation) => ({
		headerTitle: '',
		headerRight: (
			<TouchableWithoutFeedback onPress = {() => {}}>
				<View>
					<Text>选择   </Text>
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

export default StyleTypesetting;
