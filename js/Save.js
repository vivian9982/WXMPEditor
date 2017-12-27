import React from 'react';
import Dimensions from 'Dimensions';
import { View, Text, TextInput, Button } from 'react-native';
import { toastShort } from './App';

const DimWidth = Dimensions.get('window').width;
const DimHeight = Dimensions.get('window').height;

class Save extends React.Component{
	static navigationOptions = (navigation) => ({
		header: null
    });

	constructor(props){
		super(props);
		this.state = {text: ''};
	}

	submit(text, html){
		toastShort('上传成功');
		this.props.navigation.navigate('Home');
	}

	render(){
		const navigation = this.props.navigation;
		const { params } = this.props.navigation.state;
		return (
			<View style={{flex: 1}}>
		    	<View style = {{height: DimHeight * 1 / 3, backgroundColor: '#F2928A', alignItems: 'center'}}>
					<View style = {{marginTop: 65}}>
						<Text style = {{fontSize: 30, color: '#666666', marginBottom: 10}}>保存</Text>
						<TextInput
							placeholder = '请输入推送名称'
							autoFocus = {true}
							clearButtonMode = 'while-editing'
							underlineColorAndroid = 'white'
							style = {{backgroundColor: 'white', width: DimWidth * 2 / 3, fontSize: 18, borderWidth: 0.5}}
							onChangeText = {(text) => this.setState({text})}
							value = {this.state.text}
							onSubmitEditing = {this.submit.bind(this, this.state.text, params.html)}
							></TextInput>
					</View>
				</View>
		    </View>
		);
	}
}

export default Save;
