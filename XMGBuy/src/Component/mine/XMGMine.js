/**
 * 我的
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView
} from 'react-native';

// 引入内部组件
import CommonMyCell from './XMGCommonMyCell';

export default class My extends Component {
	render() {
		return(
			<ScrollView>
				<View style={styles.MineWrap}>
					<CommonMyCell
						leftIconName="draft"
						leftTitle="钱包"
						/*rightIconName=""*/
						rightTitle="账户余额: ￥100"
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	MineWrap: {
		paddingTop: 20,
		flex: 1,
		backgroundColor: '#eee'
	}
});