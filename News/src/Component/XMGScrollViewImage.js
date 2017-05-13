/**
 * ScrollViewImage
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Touchable,
	ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

// 引入计时器
let TimerMixin = require('react-timer-mixin');

export default React.createClass({
	// 注册计时器
	mixins: [TimerMixin],

	// 设置固定值
	getDefaultProps() {
		return {
			// 设置timer
			timers: 2500,
			
			// 所有的IMAGE数据的数组
			imageDataArr: []
		}
	},

	// 设置可变的和初始值
	getInitialState() {
		return {
			// 当前页码
			idx: 0,
			title: this.props.imageDataArr[0].title
		}
	},

	// 图片
	renderAllImage() {
		let allImg = [];
		let allData = this.props.imageDataArr.data;
		let colors = ['skyblue', 'pink', 'cyan', 'tan', 'tomato'];
		
		for (let i=0; i<allData.length; i++) {
			let imgItem = allData[i];
			allImg.push(
					<View key={i} style={{backgroundColor: colors[i], width: width, height: 120}}>
						<Image srouce={{uri: imgItem['m_image_url']}} style={{width: width, height: 120}} />
					</View>
				);
		}
		return allImg;
	},

	// 小圆点
	renderPageCircle() {
		let allCircle = [];	
		let allData = this.props.imageDataArr.data;
		let styls;

		for (let i=0; i<allData.length; i++) {
			styls =  i == this.state.idx ? {color: 'orange'} : {color: '#fff'};
			allCircle.push(
				<Text key={i} style={[{fontSize: 25, justifyContent: 'right'}, styls]}>&bull;</Text>
			);	
		}

		return allCircle;
	},

	// 一帧滚动结束
	onAnimationEnd(ev) {
		// 1. 水平方向的偏移量
		let offSetX = ev.nativeEvent.contentOffset.x;
		console.log(offSetX, 'offSetX');
		// 2. 求出当前页数
		let currentPage = Math.floor(offSetX / width);

		// 更新状态机，重新绘制UI
		this.setState({
			// 更新索引值
			idx: currentPage,
			// 更新title
			title: this.props.imageDataArr[currentPage].title
		});
	},
	
	// 开启定时器
	startTimer() {
		// 添加定时器
		this.setInterval(this.timers, this.props.timers);
	},
	
	timers() {
		// 获取 ScrollView DOM 对象
		let scrollView = this.refs.scrollView;
		
		// 设置圆点
		let activePage = 0;
		let imgCount = this.props.imageDataArr.data.length; // 图片总数
		// 置前判断
		if ((this.state.idx+1) >= imgCount) {
			activePage = 0;
		} else {
			activePage = this.state.idx+1;
		}
		
		// 重新设置
		this.setState({
			idx: activePage,
		});
		
		// 图片滚动
		let offsetX = activePage * width;
		scrollView.scrollResponderScrollTo({x: offsetX, y: 0 , animated: true});
		
	},
	
	// 调用开始拖拽
	onScrollBeginDrag() {
		// 停止定时器
		this.clearInterval(this.timer);
	},
	
	// 停止拖拽
	onScrollEndDrag() {
		// 开启定时器
		this.timer = this.startTimer();
	},
	
	// 实现定时器
	componentDidMount() {
		// 开启定时器
		this.timer = this.startTimer();
	},
	
	// 渲染
	render() {
			return (<View style={styles.container}>
					<ScrollView 
						ref="scrollView"
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}		
						// 一帧滚动结束
						onMomentumScrollEnd={(ev) => this.onAnimationEnd(ev)}
						// 开始拖拽
						onScrollBeginDrag={this.onScrollBeginDrag}	
						// 停止拖拽
						onScrollEndDrag={this.onScrollEndDrag}
					>
					{this.renderAllImage()}
					</ScrollView>
					{/* 小圆点 */}
					<View style={styles.pageView}>
						<Text style={{color: '#fff'}}>{this.state.title}</Text>
						<View style={{flexDirection: 'row', }}>
							{this.renderPageCircle()}
						</View>
					</View>
				</View>);
	}
});

const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	pageView: {
		flexDirection: 'row',
		backgroundColor: 'tan',
		// 定位
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		width, width,
		height: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		justifyContent: 'space-between'
	}
});