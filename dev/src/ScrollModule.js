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

	render(){
			return (<View style={styles.container}>
					<ScrollView 
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}		
						// 一帧滚动结束
						onMomentumScrollEnd={(ev) => this.onAnimationEnd(ev)}
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


