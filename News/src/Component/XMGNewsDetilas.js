/**
 *	NewsDetails
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    WebView
} from 'react-native';


let NewsDetails = React.createClass({
	
	getDefaultProps() {
		return {
//			url_api: 'http://baijia.baidu.com/news?tn=bdbjbody&bjaid=' + this.props.rowData.ID + '&bjdomain=' + this.props.rowData.m_writer_name
		}
	},
	
	getInitialState() {
		return {
			detailsData: ''
		}
	},
	
	componetDidMount() {
		// http://baijia.baidu.com/news?tn=bdbjbody&bjaid=848285&bjdomain=yufenghui
		// 请求数据
		let url_api = 'http://baijia.baidu.com/news?tn=bdbjbody&bjaid=' + this.props.rowData.ID + '&bjdomain=' + this.props.rowData.m_writer_name
		
		// 发送请求
		fetch(url_api)
			.then((response) => response.json)
			.then((responseData) => {
				
				if (responseData['img'].length > 0) {
					for (let i=0; i<responseData['img'].length; i++) {
						// 取出单个图像
						let img = responseData['img'][0];
						// 取出src
						let src = img['src'];
						// 拼接img
						let imgHTML = '<img src="'+ src +'" width="100%"/>'
						
						// 替换占位符
						responseData = responseData.replace(img['ref'], imgHTML);
					}
				}
				
				this.setState({
					detailsData: responseData
				});
			})
			.catch((error)=>{
				if (error) {
					alert('请求数据失败');
				}
			});
	},
	
    render() {
        return (
        	<WebView style={styles.webview_style} 
//	            url={this.props.url_pai}
				source={{html: this.state.detailsData, baseUrl: ''}}
	            startInLoadingState={true}
	            domStorageEnabled={true}
	            javaScriptEnabled={true}
	          >
	        </WebView>
        );
    }
});


// 输出类
module.exports = NewsDetails;
