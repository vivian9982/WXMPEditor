import React from 'react';
import { commonstyle } from './App'
import { 
	View, 
	Text, 
	Button, 
	TouchableWithoutFeedback, 
	ScrollView, 
	Image, 
	StyleSheet,
	CameraRoll
} from 'react-native';



// 新增图片盒子类 modified by Joe at 2017.12.12
class ImageBox extends React.Component{

	constructor(props) {
	  super(props);		
	  this.state = {
	  	chosen: false,
	  };
	}

	render(){
		if(this.state.chosen){
			return(
				<TouchableWithoutFeedback onPress = {this.chooseBox.bind(this)}>
					<Image source = {this.props.url}  style = {styles.image_chosen} />
				</TouchableWithoutFeedback>
			);
		}else{
			return(
				<TouchableWithoutFeedback onPress = {this.chooseBox.bind(this)}>
					<Image source = {this.props.url}  style = {styles.image} />
				</TouchableWithoutFeedback>
			);
		}
	}

	chooseBox(){
		if(this.state.chosen){
			this.setState({
				chosen:false
			});
			// console.log('ok');
		}else{
			this.setState({
				chosen:true
			});
			// console.log('ok');
		}
	}
}

class Gallery extends React.Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	photos:[]
	  };
	}

	static navigationOptions = ({ navigation })  => ({
		headerTitle: '',
		headerStyle: {
			backgroundColor: '#F2928A'
		},
		headerTitleStyle: {
			color: 'white'
		},
		headerTintColor: 'white',
		headerRight: (
			<TouchableWithoutFeedback onPress = {()=>{
				navigation.state.params.navigatePress()
			}}>
				<View>
					<Text style = {commonstyle.rightupperbutton}>选择   </Text>
				</View>
			</TouchableWithoutFeedback>
		)
    });                                                                                                                                                                                                                          

	componentDidMount(){
		this.navigatePress = this.navigatePress.bind(this);
		this.props.navigation.setParams({navigatePress:this.navigatePress})
	}

	navigatePress(){
		alert('1123');
	}

	render(){
		const navigation = this.props.navigation;
        const params = this.props.navigation.state;
        alert(params.uri);
		// let photolist = params.uri || [];
		// let photoView = [];
		// for(let i = 0;i < photolist.length;i ++){
		// 	photoView.push(
		// 		<ImageBox url = {require(photolist[i])}/>
		// 	)
		// }
        // let photoView = []
        // photoView.push(
        //     <ImageBox url = {require(params.uri)}/>
        // ) 
		return (
			<View>
	                <Text>{params.uri}</Text>
            </View>
		);
	}

	// 组件创建时提交函数
	componentDidMount(){
        alert()
		// alert('ok');
		// EventEmitter.subscribe(true,function(){
		// 	alert('ok');
		// 	let fetchParams = {
		// 		first: 30,
		// 		groupTypes:'All',
		// 		assetType:'Photos'
		// 	};
		// 	let photos = [];

		// 	let _that = this;

		// 	let promise = CameraRoll.getPhotos(fetchParams);
		// 	promise.then(function(data){
		// 		let edges = data.edges;
		// 		for(let i in edges){
		// 			photos.push(edges[i].node.image.uri);
		// 		}
		// 		_that.setState({
		// 			photos:previousState.photos + photos
		// 		});
		// 	},function(err){
		// 		alert('获取照片失败');
		// 	});
		// });
	}

	// 组件销毁时销毁函数
	componentWillUnmount(){
		// EventEmitter.unSubscribe('uploadPhoto');
	}

	// uploadPhoto(){
	// 	let fetchParams = {
	// 		first: 30,
	// 		groupTypes:'All',
	// 		assetType:'Photos'
	// 	};
	// 	let photos = [];

	// 	let _that = this;

	// 	let promise = CameraRoll.getPhotos(fetchParams);
	// 	promise.then(function(data){
	// 		let edges = data.edges;
	// 		for(let i in edges){
	// 			photos.push(edges[i].node.image.uri);
	// 		}
	// 		_that.setState({
	// 			photos:previousState.photos + photos
	// 		});
	// 	},function(err){
	// 		alert('获取照片失败');
	// 	});	
	// }
}

function uploadPhoto(){
    // let fetchParams = {
    //      first: 30,
    //      groupTypes:'All',
    //      assetType:'Photos'
    //  };
    //  let photos = [];

    //  // let _that = this;

    //  let promise = CameraRoll.getPhotos(fetchParams);
    //  promise.then(function(data){
    //      let edges = data.edges;
    //      for(let i in edges){
    //          photos.push(edges[i].node.image.uri);
    //      }
    //      // _that.setState({
    //      //     photos:previousState.photos + photos
    //      // });
    //  },function(err){
    //      alert('获取照片失败');
    //  });
    navigate('Gallery',
            {
                uri:'../img/u317.png'
            })
}

const styles = StyleSheet.create({
	image:{
		margin:8,
		maxWidth:300,
		maxHeight:250,
		alignSelf:'center'
	},
	image_chosen:{
		margin:8,
		maxWidth:300,
		maxHeight:250,
		borderColor: '#1e90ff',
		borderWidth:5,
		alignSelf:'center'
	},
	nav_button:{
		position:'absolute',
        top:-38,
        left:320,
        elevation:20

	}
});

export default Gallery;
