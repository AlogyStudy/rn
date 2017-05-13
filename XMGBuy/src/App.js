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
} from 'react-native';

// 导航组件
import ReactNativeTabNativegator from 'react-native-tab-navigator';

// 引入模块
import Home from './Component/home/XMGHome';
import More from './Component/more/XMGMore';
import My from './Component/my/XMGMy';
import Seller from './Component/seller/XMGSeller';

export default class XMGBuy extends Component {
	render() {
		return(
			<Home />
		);
	}
}

const styles = StyleSheet.create({
	
});