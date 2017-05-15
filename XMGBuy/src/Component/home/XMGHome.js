/**
 * Home
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
	Platform
} from 'react-native';

// 引入外部组件
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

// 引入内部组件
import HomeDetails from './XMGHomeDetails';

export default class Home extends Component {
	static navigationOptions = {
		title: '首页'
	}
	
	// 跳转到二级界面
	pushToDetails() {
		/*this.props.navigator.push({
			title: '',
			component: HomeDetails,
		});*/
	}

	renderNavBar() {
		return (
			<View style={styles.navBarSty}>
				<TouchableOpacity style={styles.addressStyle} onPress={() => {alert('定位')}}>
					<Text style={styles.navBarLocationSty}>深圳</Text>
				</TouchableOpacity>
				<TextInput placeholder='输入商家，品类，商圈' style={styles.topInputSty}></TextInput>
				<View style={styles.camera}>
					<TouchableOpacity onPress={() => {alert('信息')}}>
						<Image source={require('../../../img/icon_homepage_message.png')} style={{width: 30, height: 30}} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {alert('扫描')}}>
						<Image source={require('../../../img/icon_homepage_scan.png')} style={{width: 30, height: 30}} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	
	render() {
		return(
			<View style={styles.container}>
				{/* 导航 */}
				{this.renderNavBar()}
				<TouchableOpacity onPress={this.pushToDetails()}>
			        <Text style={styles.welcome}>
			          	首页
			        </Text>
				</TouchableOpacity>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fefefe'
	},
	navBarSty: {
		height: Platform.OS == 'ios' ? 84 : 64,
		backgroundColor: 'rgba(255, 96, 0, 1.0)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	navBarLocationSty: {
		textAlign: 'center',
		color: 'white'
	},
	topInputSty: {
		width: width * 0.7,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 100,
	},
	camera: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	addressStyle: {
		flex: 1,
	}
});