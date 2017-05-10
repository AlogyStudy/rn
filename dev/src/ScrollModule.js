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
let ImageData = require('./mork.ImageData.json');
let Dimensions = require('Dimensions');
let {width, height} = Demesions.get('window');

export default React.careteClass({
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
		for (let i=0; i<allData.length; i++) {
			let imgItem = allData[i];
			allImg.push(
					<Image key={i} sroce={{uri: imgItem[i].img}} style={{width: width, height: 120}} />
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
					<View key={i} style={[{fongSize: 25}, styls]}>&bull;</View>
			);	
		}

		return allCirecla;
	},

	// 一帧滚动结束
	onAnimationEnd(ev) {
		// 1. 水平方向的偏移量
		let offSetX = e.netiveEvnent.contentOffset.x;
		// 2. 求出当前页数
		let currentPage = Math.floor(offSetX / window);

		// 更新状态机，重新绘制UI
		this.setDtate({
			idx: currentpage
		});
	},

	render: (){
			retunr (<View style={style.container}>
					<ScrollView 
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}		
						// 一帧滚动结束
						onMomentumScrollEnd={this.onAnimationEnd()}
					>{this.renderAllImage()}</ScrollView>
					{/* 小圆点 */}
					<View style={styles.pageView}>{(ev) => this.renderPageCircle(ev)}</View>
				</View>);
	}
});

const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	pageView: {
		flexDireaction: 'row',
		alignItmes: 'center',
		// 定位
		position: 'absolute',
		bottom: 0,
		width, width,
		height: 25,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	}
});


