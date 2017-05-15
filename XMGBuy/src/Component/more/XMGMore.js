/**
 * More
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';

// 公共样式组件
const STYLE = require('../common/style.js').STYLE;

// 内部组件
import CommonCell from './XMGCommonCell';

export default class More extends Component {

	// 渲染导航条
	renderNavBar() {
		return (
			<View style={[styles.navBarSty]}>
				<Text style={styles.textColor}>更多</Text>
				<TouchableOpacity style={styles.iconPosition} onPress={() => {alert('设置');}}>
					<Image source={require('../../../img/icon_mine_setting.png')} style={{width: 30, height: 30}} />
				</TouchableOpacity>
			</View>
		);
	}

	// 渲染主体部分
	_renderMainView() {
		let reslut = [];
		// item组
		let itemArr = [
			[
				{title: '扫一扫'}
			],
			[
				{title: '省流量模式', isSwitch: true},
				{title: '消息提醒'},
				{title: '邀请好友使用软件'},
				{title: '清空缓存', rightTxt: '1.99M'},
			],
			[
				{title: '问卷调查'},
				{title: '支付帮助'},
				{title: '网络诊断'},
				{title: '关于本软件'},
				{title: '我要应聘'},
			],
			[
				{title: '精品应用'}
			]	
		];

		// 处理数组数据
		for (let i=0; i<itemArr.length; i++) {
			for (let j=0; j<itemArr[i].length; j++) {
				if (j === 0) {
					reslut.push(
						<View style={{marginTop: 20 }}>
							<CommonCell key={[i][j]} title={itemArr[i][j]['title']} isSwitch={itemArr[i][j]['isSwitch']} rightTxt={itemArr[i][j]['rightTxt']} /> 
						</View>
						);
				} else {
					reslut.push(
					<View>
						<CommonCell key={[i][j]} title={itemArr[i][j]['title']} isSwitch={itemArr[i][j]['isSwitch']} rightTxt={itemArr[i][j]['rightTxt']} /> 
					</View>
					);
				}
			}
		}
		return reslut;
	}

	render() {
		return(
			<View style={styles.container}>
				{/* 导航条 */}
				{this.renderNavBar()}
		    <ScrollView>
					{this._renderMainView()}
						{/*<View style={{marginTop: 20}}>
							<CommonCell title="扫一扫" />
						</View>
						<View style={{marginTop: 20}}>
							<CommonCell title="省流量模式" isSwitch={true} />
						</View>
						<View style={{marginTop: 20}}>
							<CommonCell title="清空缓存" rightTxt="10M" />
						</View>*/}
				</ScrollView>    
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	},
	navBarSty: STYLE.navBarSty,
	textColor: STYLE.textColor,
	iconPosition: STYLE.iconPosition
});