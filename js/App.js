import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Toast from 'react-native-root-toast';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import New from './New';
import Gallery from './Gallery';
import StyleTypesetting from './StyleTypesetting';
import History from './History';
import Title from './Title';
import Picture from './Picture';
import Character from './Character';
import Guide from './Guide';
import Used from './Used';
import Save from './Save';

const RootNavigator = StackNavigator({
    Home: {screen: Home},
  	Login: {screen: Login},
	Register: {screen: Register},
	New: {screen: New},
	Gallery: {screen: Gallery},
	StyleTypesetting: {screen: StyleTypesetting},
	History: {screen: History},
	Title: {screen: Title},
	Picture: {screen: Picture},
	Character: {screen: Character},
	Guide: {screen: Guide},
	Used: {screen: Used},
	Save: {screen: Save}
});

export const commonstyle = StyleSheet.create({
	rightupperbutton: {
		color: 'white',
		fontSize: 20
	}
});

var toast = undefined;
export const toastShort = (content) => {
	if (toast !== undefined)
		Toast.hide(toast);
	toast = Toast.show(content.toString(), {
		duration: Toast.durations.SHORT,
		position: Toast.positions.BOTTOM,
		shadow: true,
		animation: true,
		hideOnPress: true,
		delay: 0
	});
};

export const jsonfetch = (uri, body, callback) => {
	fetch(uri, {
		method: 'POST',
		header: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: body
	})
		.then((response) => response.json())
		.then(callback)
		.catch((error) =>  {
			toastShort('服务器连接失败，请确定您的网络环境');
		})
};

export const textfetch = (uri, callback) => {
	fetch(uri)
		.then((response) => response.text())
		.then(callback)
		.catch((error) =>  {
			alert(error);
			toastShort('服务器连接失败，请确定您的网络环境');
		})
}

export const itemHTML = (HTMLContent) => (`
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<div id='HTMLContent'>${HTMLContent}</div>
		<script>
			window.onload=function(){
				window.location.hash = 1;
				document.title = document.body.clientHeight;

				function sendData(data) {
				  if (window.originalPostMessage) {
					window.postMessage(data);
				  } else {
					throw Error('postMessage接口还未注入');
				  }
				}
				document.getElementById('HTMLContent').onclick = function () {
				  sendData('click!');
				}
			}
		</script>
	</body>
</html>
`);

export default RootNavigator;
