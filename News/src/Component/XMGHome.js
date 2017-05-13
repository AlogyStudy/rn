/**
 *	Home
 */

import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

// 导入外部组件
let ScrollImage = require('./XMGScrollViewImage');
let NewsDetails = require('./XMGNewsDetilas');

let Home = React.createClass({
	
	getDefaultProps() {
		return {
			url_api: 'http://baijia.baidu.com/ajax/labellatestarticle?page=2&pagesize=20&prevarticalid=846253&flagtogether=1&labelid=3'
		}
	},
	
	// 初始化数据
	getInitialState() {
		return {
			//　ListView头部的数据源
			headerDataArr: [],
			
			// cell的初始化数据
			dataSource: new ListView.DataSource({
				rowHasChangeed: (r1, r2) => r1 != r2
			})
		}
	},
	
	//　处理网络数据
	dealWithData(localJsonData) {
		//　所有数据
		let jsonData = localJsonData.data.list;　//　数据Array
		let headerArr = [], listDataArr = [];
		
		for (let i=0; i<jsonData.length; i++) {
			if (i < 4) { // 第4条数据放入焦点图
				headerArr.push(jsonData[i]);			
			} else {　//　剩余数据作为行数据
				listDataArr.push(jsonData[i]);
			}
		}
		
		// 更新状态机
		this.setState({
			headerDataArr: headerArr,
			dataSource: this.state.dataSource.cloneWithRows(listDataArr) 	
		});
	},
	
	// 请求网络数据
	loadDataFromNet() {
		// fetch
		fetch(this.props.url_api)
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.errno === 0) {
					this.dealWithData(responseData);	
				}
			})
			.catch((error) => {
				// 模拟本地数据　& 数据错误
				if (error) {
					// 获取本地json数据
					let LocalData = require('../../mork/LocalData.json');
					if (LocalData.errno === 0) {
						this.dealWithData(responseData);	
					}
				}
			});
	},
	
	// 跳转新闻详情页  参数需要`ID`,`m_writer_name`
	// url:　http://baijia.baidu.com/news?tn=bdbjbody&bjaid=848285&bjdomain=yufenghui
	pushToNewsDetails(rowData) {
		//　跳转页面
		this.props.navigator.push({
			component: NewsDetails, // 跳转组件
			title: rowData.title,　//　title
			passProps: {rowData} // 传递参数
		});
	},
	
	// 渲染ListView
	_renderRow(rowData) {
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={() => {this.pushToNewsDetails(rowData)}}>
				<View style={styles.cellViewStyle}>
					<Image source={{uri: rowData.m_image_url}} style={{width: 90, height: 90, backgroundColor: 'tomato', marginRight: 10}} />
					<View style={styles.rightViewStyle}>
						<Text style={styles.titleStyle}>{rowData.m_title}</Text>
						<Text style={styles.subTitleStyle}>{rowData.m_summary}</Text>
						<Text style={styles.flowTitleStyle}>{rowData.m_writer_name}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	},
	
	// 头部　焦点图
	_renderHeader() {
		//　获取焦点图数据
		if (this.state.headerDataArr.length == 0) {
			return;
		}
		return (
			<ScrollImage
				imageDataArr={this.state.headerDataArr}
			/>
		);
	},
	
	componentDidMount() {
		// 请求数据
		this.loadDataFromNet();		
	},
	
    render() {
        return (
        	<ListView
        		dataSource={this.state.dataSource}
        		renderRow={this._renderRow}
        		renderHeader={this._renderHeader}
        	/>
        );
    }
});

let styles = StyleSheet.create({
	cellViewStyle: {
		flexDirection: 'row',
		padding: 10,
		borderBottomColor: '#efefef',
		borderBottomWidth: 0.5
	},
	rightViewStyle: {
		width: 260,
	},
	titleStyle: {
		fontSize: 18,
		marginBottom: 5
	},
	subTitleStyle: {
		fontSize: 14,
		color: 'gray'
	},
	flowTitleStyle: {
		position: 'absolute',
		right: 10,
		bottom: 2,
		padding: 3,
		
		// 边框
		borderWidth: 0.5,
		borderColor: 'gray',
		borderRadius: 5,
		color: 'gray'
	}
});


// 输出类
module.exports = Home;
