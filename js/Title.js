import React from 'react';
import Dimensions from 'Dimensions';
import { View, Text, TouchableWithoutFeedback, FlatList, WebView } from 'react-native';
import { commonstyle, jsonfetch, itemHTML, textfetch } from './App'
import { serverURL, filePath } from './CommonConfig';
import session from './CommonConfig';

const DimWidth = Dimensions.get('window').width;
const DimHeight = Dimensions.get('window').height;

class Title extends React.Component{
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

	constructor(props){
		super(props);
		this.state = {title: []};
	}

	_Update(){
		jsonfetch(
			serverURL,
			'type=title&num=' + session.title.length,
			(responseJSON) => {
				for(var i = 0; i < responseJSON.length; ++i)
					textfetch(
						serverURL + filePath.title + responseJSON[i].path,
						((responseJSON, i) => {
							return (responseTEXT) => {
								responseJSON[i].content = responseTEXT;
								var bj = true;
								for(var j = responseJSON.length - 1; j >= 0; --j)
								if(responseJSON[j].content === undefined){
									bj = false;
									break;
								}
								if(bj){
									session.title = session.title.concat(responseJSON);
									this.setState({title: session.title});
									this.forceUpdate();
								}
							}
						})(responseJSON, i));
			}
		);
	}

	componentWillMount(){
		this._Update.bind(this)();
	}

	render(){
		const navigation = this.props.navigation;
		const data = session.title;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
				<FlatList
					data = {data}
					keyExtractor = {(item: ItemT, index: number) => index}
					renderItem = {({item}) => <WebView
												style = {{width: DimWidth, height: this.state.height | 50}}
												source = {{html: itemHTML(item.content), baseUrl: ''}}
												onMessage = {(e) => alert(e.nativeEvent.data)}
												onNavigationStateChange = {(title)=>{
													 if(title.title != undefined)
													 	this.setState({height:(parseInt(title.title))});
												   }}
											/>}
				/>
		    </View>
		);
	}
}

export default Title;
