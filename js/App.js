import { StackNavigator } from 'react-navigation';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import New from './New'
import Gallery from './Gallery'
import StyleTypesetting from './StyleTypesetting'
import History from './History'

const RootNavigator = StackNavigator({
    Home: {screen: Home},
  	Login: {screen: Login},
	Register: {screen: Register},
	New: {screen: New},
	Gallery: {screen: Gallery},
	StyleTypesetting: {screen: StyleTypesetting},
	History: {screen: History}
});

export default RootNavigator;
