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

// 导入JSON数据 
let Wine = require('./mork/Wine.json');

export default React.createClass({
	// 设置初始值
	getInitialState() {
		// 设置DataSource 
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}); // sort	
		// 返回数据, 塞值
		return {
			dataSource: ds.cloneWithRows(Wine) // cloneWithRows 放置数组		
		}
	},
	
	// 渲染row，调用回调
	renderRow(rowData, sectionID, rowID, highlinghtRow) {
		console.log(rowData, sectionID, rowID, highlinghtRow);
		return (
			<TouchableOpacity activeOpacit={0.5}>	
				<View style={styles.cellViewStyle}>
					<Image source={{uri: rowData.image}} style={[styles.leftViewStyle ,{width: 60, height: 60, backgroundColor: 'cyan'}]} />
					<View style={styles.cellViewText}>
						<Text style={styles.cellViewTextTop}>{rowData.name}</Text>
						<Text style={styles.cellViewTextBottom}>￥{rowData.money}</Text>
					</View>
				</View>
			</TouchableOpacity>)
	},
	
	// 渲染
	render() {
		return (<ListView
				// 设置数据源
				dataSource={this.state.dataSource}
				// 渲染row，调用回调 , 没有手动调用，会自动传入4个参数。 分别为：rowData (一条数据), sectionID（分组ID）, rowID（行ID）, highlinghtRow（标记是否高亮选中）
				renderRow={this.renderRow}
			/>);
	}
});

const styles = StyleSheet.create({
	cellViewStyle: {
		flexDirection: 'row',
		borderBottomWidth: 0.5,
		borderBottomColor: '#eee',
		paddingTop: 10,
        paddingBottom: 10,
	},
	leftViewStyle: {
		marginLeft: 10,	
        marginRight: 10,
//      flex: 1,
	},
	cellViewText: {
//	    flex: 5,
		justifyContent: 'center'	
	},
	cellViewTextTop: {
        color: 'tomato',
        fontSize: 15,
        paddingRight: 10,
        width: width * 0.8
	},
	cellViewTextBottom: {
		marginTop: 8
	}
});


