import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

export default class rn extends Component {
	
	renderChildView() {
		var allChild = [];
		var colors = ['skyblue', 'pink', 'cyan', 'green', 'tan', 'yellow', 'red', 'aqua', 'bisque', 'linen', 'tomato'];
		
		for (var i=0; i<colors.length; i++) {
			allChild.push(
				<View key={i} style={{backgroundColor: colors[i], height: 120, width: width}}>
					<Text>{i}</Text>
				</View>
			);
		}
		
		return allChild;
	}
	
	render() {
		return(
			<ScrollView
				// true，所有视图都会水平排列
				horizontal={true}
				// false 隐藏滚动条
				showsHorizontalScrollIndicator={false}
				// true 具有弹簧效果
				showsVerticalScrolllndicator={true}
				// true 停止位置整张的位置
				pagingEnabled={true}
				// false 不能允许滚动
//				scrollEnabled={false}
			>
				{this.renderChildView()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({});