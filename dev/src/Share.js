import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	ScrollView,
	ListView,
	AlertIOS
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

let shareData = require('./mork/shareData.json');

// 常量设置
let clos = 3; // 显示几行
let cellWH = 100; // icon 宽高
let vMargin = (width - cellWH * clos) / (clos + 1);
let vHmargin = 25;


export default class Share extends Component {
	// 设置初始值
	constructor(props) {
		super(props);
		
		// 在什么条件下创建数据源
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		
		// 设置值
		this.state = {
			dataSource: ds.cloneWithRows(shareData.data)
		}
	}
	
	// 渲染
	renderRow(rowData, sectionID, rowID, highlinghtRow) {
		console.log(rowData);
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={this._onPressButton}>
				<View style={styles.shareViewWrap}>
					<Image source={{uri: rowData.icon}} style={{width: 50, height: 50, backgroundColor: 'tomato'}} />
					<Text style={styles.titleView}>{rowData.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
	
	// 执行跳转
	_onPressButton() {
		alert(123123);
	}
	
	render() {
		return (
			<ListView
				contentContainerStyle={styles.container}
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: width,
		// 多行显示
		flexWrap: 'wrap'
	},
	shareViewWrap: {
		width: cellWH,
		height: cellWH,
		marginLeft: vMargin,
		marginBottom: vHmargin,
		
		// 居中
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleView: {
		lineHeight: 30
	}
});


