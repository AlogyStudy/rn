/**
 *	入口文件
 */

import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';


// 引入组件
import Home from './Component/XMGHome';
import Find from './Component/XMGFind';
import Message from './Component/XMGMessage';
import Me from './Component/XMGMe';


let Main = React.createClass({
	getInitialState() {
		return {
			selectdTabBarItem: 'home' // 初始值为显示首页
		}
	},
    render() {
        return (
        	<TabBarIOS
        		tintColor="orange"
        	>
        		{/* 首页  */}
        		<TabBarIOS.Item
//      			title='首页'
//      			icon={require('image!tabbar_home')}
					systemIcon='home'
        			selected={this.state.selectdTabBarItem == 'home'}
					onPress={() => { this.setState({selectdTabBarItem: 'home'}) } }
        		>
        			<NavigatorIOS
        				style={{flex: 1}}
        				tintColor="orange"
        				initialRoute={{
        					title: '首页',　
        					component: Home,　//　组件
//      					leftButtonIcon: require('image!'),
//							rightButtonIcon: require('image!')
        				}}
        			/>
        		</TabBarIOS.Item>
        		
        		{/* 消息 */}
        		<TabBarIOS.Item
//      			title='消息'
//      			icon={require('image!tabbar_message_center')}
					systemIcon='home'
        			selected={this.state.selectdTabBarItem == 'message'}
					onPress={() => { this.setState({selectdTabBarItem: 'message'}) } }
        		>
        			<NavigatorIOS
        				style={{flex: 1}}
        				initialRoute={{
        					title: '消息',　
        					component: Message,　//　组件
        				}}
        			/>
        		</TabBarIOS.Item>
        		
        		{/* 发现  */}
        		<TabBarIOS.Item
//      			title='发现'
//      			icon={require('image!tabbar_discover')}
					systemIcon='home'
        			selected={this.state.selectdTabBarItem == 'discover'}
					onPress={() => { this.setState({selectdTabBarItem: 'discover'}) } }
        		>
        			<NavigatorIOS
        				style={{flex: 1}}
        				initialRoute={{
        					title: '发现',　
        					component: Find,　//　组件
        				}}
        			/>
        		</TabBarIOS.Item>
        		
        		{/* 我的 */}
        		<TabBarIOS.Item
//      			title='我的'
//      			icon={require('image!tabbar_profile')}
					systemIcon='home'
        			selected={this.state.selectdTabBarItem == 'profile'}
					onPress={() => { this.setState({selectdTabBarItem: 'profile'}) } }
        		>
        			<NavigatorIOS
        				style={{flex: 1}}
        				initialRoute={{
        					title: '我的',　
        					component: Me,　//　组件
        				}}
        			/>
        		</TabBarIOS.Item>
        	</TabBarIOS>
        );
    }
});

// 输出类
module.exports = Main;
