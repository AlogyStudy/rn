/**
 * 入口文件
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Platform,// 判断当前运行系统
} from 'react-native';

/**----- 外部的组件类 -----**/
import TabNavigator from 'react-native-tab-navigator';
import { StackNavigator } from 'react-navigation';

// 引入模块
import Home from './Component/home/XMGHome';
import Seller from './Component/seller/XMGSeller';
import My from './Component/mine/XMGMine';
import More from './Component/more/XMGMore';

/*StackNavigator({
	Home: {screen: Home},
	Seller: {screen: Seller},
	My: {screen: My},
	More: {screen: More}
});*/

export default class XMGBuy extends Component {
	
	// 初始化数据值
	constructor(props) {
		super(props);
		
		this.state = {
			selectedTab: 'home' // 默认首页选中
		}
	}
	
	// 渲染导航
	render() {
		return(
			<TabNavigator>
				{/* 首页 */}
			  	<TabNavigator.Item
				  	title="首页"
//				    badgeText="1"
				    renderIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_homepage.png')} />}
    				renderSelectedIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_homepage_selected.png')} />}
				    onPress={() => this.setState({ selectedTab: 'home' })}
				    selected={this.state.selectedTab === 'home'}
//				    titleStyle={{}}
//				    selectedTitleStyle={}
			  	>
			  		<Home />
			  	</TabNavigator.Item>
			  	
		  		{/* 商店 */}
			  	<TabNavigator.Item
			  		title="商店"
				    renderIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_merchant_normal.png')} />}
    				renderSelectedIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_merchant_selected.png')} />}
				    onPress={() => this.setState({ selectedTab: 'seller' })}
				    selected={this.state.selectedTab === 'seller'}
			  	>
			    	<Seller />
			  	</TabNavigator.Item>
			  	
			  	{/* 我的 */}
			  	<TabNavigator.Item
			  		title="我的"
				    renderIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_mine.png')} />}
    				renderSelectedIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_mine_selected.png')} />}
				    onPress={() => this.setState({ selectedTab: 'my' })}
					selected={this.state.selectedTab === 'my'}
			  	>
			    	<My />
			  	</TabNavigator.Item>
			  	
			  	{/* 更多 */}
			  	<TabNavigator.Item
			  		title="更多"
				    renderIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_misc.png')} />}
    				renderSelectedIcon={() => <Image style={styles.iconStyle} source={require('../img/icon_tabbar_misc_selected.png')} />}
				    onPress={() => this.setState({ selectedTab: 'more' })}
					selected={this.state.selectedTab === 'more'}
			  	>
			    	<More />
			  	</TabNavigator.Item>
			</TabNavigator>
		);
	}
}

const styles = StyleSheet.create({
	iconStyle: {
		width: Platform.OS === 'ios' ? 30 : 25,
		height: Platform.OS === 'ios' ? 30 : 25,
	}
});