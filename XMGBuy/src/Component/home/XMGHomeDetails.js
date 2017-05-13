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
	TouchableOpacity
} from 'react-native';



export default class Home extends Component {
	static navigationOptions = {
		title: '详情页'
	}
	
	pushToHome() {
		//  返回首页
//		this.props.navigator.pop();	
	}
	
	render() {
		return(
			<View style={styles.container}>
				<TouchableOpacity onPress={() => {this.pushToHome()}}>
			        <Text style={styles.welcome}>
			          	HomeDetials
			        </Text>
				</TouchableOpacity>
		    </View>
		);
	}
}

const styles = StyleSheet.create({});