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

// 引入JSON数据
let ImageData = require('./mork/ImageData.json');
const PROJECTDIR = 'D:/xampp/htdocs/rn/dev/';

export default React.createClass({
	// 注册计时器
	mixins: [TimerMixin],

	// 设置固定值
	getDefaultProps() {
		return {
			// 设置timer
			timers: 2500
		}
	},

	// 设置可变的和初始值
	getInitialState() {
		return {
			// 当前页码
			idx: 0
		}
	},

	// 图片
	renderAllImage() {
		let allImg = [];
		let allData = ImageData.data;
		let colors = ['skyblue', 'pink', 'cyan', 'tan', 'tomato'];
		
		let ArrDataUrl = [];
		for (let j=0; j<allData.length; j++) {
			ArrDataUrl.push('./../img/scrollImg/' + allData[j]['img'] + '.png');
		}
		
		for (let i=0; i<allData.length; i++) {
			let imgItem = allData[i];
//			let ctImg = './../img/scrollImg/' + imgItem['img'] + '.png';
//			source={require(ArrDataUrl[i])}
			allImg.push(
					<View key={i} style={{backgroundColor: colors[i], width: width, height: 120}}>
						<Image style={{width: width, height: 120}} />
						<Text>{i}</Text>
					</View>
				);
		}
		return allImg;
	},

	// 小圆点
	renderPageCircle() {
		let allCircle = [];	
		let allData = ImageData.data;
		let styls;

		for (let i=0; i<allData.length; i++) {
			styls =  i == this.state.idx ? {color: 'orange'} : {color: '#fff'};
			allCircle.push(
				<Text key={i} style={[{fontSize: 25}, styls]}>&bull;</Text>
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
			idx: currentPage
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
		let imgCount = ImageData.data.length; // 图片总数
		// 置前判断
		if ((this.state.idx+1) >= imgCount) {
			activePage = 0;
		} else {
			activePage = this.state.idx+1;
		}
		
		// 重新设置
		this.setState({
			idx: activePage		
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
					<View style={styles.pageView}>{this.renderPageCircle()}</View>
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
	}
});


