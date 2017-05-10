import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class rn extends Component {
  render() {
    return (
    	<View style={[styles.height160, styles.row, styles.borderC]}>
    		<View style={[styles.height160, styles.part_1, styles.borderCR]}>
    			<Text style={[styles.fontSize20, styles.yuehui]}>我们约会吧</Text>
    			<Text style={[styles.lianai]}>恋爱家人好朋友</Text>
    			<Image style={[styles.yue, {marginLeft: 20}]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
    		</View>
    		<View style={[styles.height160, styles.part_r]}>
    		
    			<View style={[styles.row]}>
    				<View style={{paddingLeft: 30, paddingTop: 4}}>
		    			<Text style={{lineHeight: 20}}>低价超值</Text>
	    				<Text style={{lineHeight: 20}}>十元优惠生活</Text>
    				</View>
    				<Image style={[styles.yue, styles.marginL]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
    			</View>
    			
    			<View>
    				<View style={{paddingLeft: 30}}>
    					<Text>午后时光</Text>
    				</View>
    				<View style={{paddingLeft: 30}}>
    					<Text>名店抢购</Text>
    				</View>
    			</View>
    		</View>
    	</View>
    )
  }
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	height160: {
		height: 160
	},
	fontSize20: {
		fontSize: 20	
	},
	borderC: {
		borderBottomWidth: 1,
		borderBottomColor: '#DDD8CE',
		paddingTop: 2,
		paddingBottom: 10
	},
	borderCR: {
		borderRightWidth: 1,
		borderRightColor: '#DDD8CE'
	},
	lianai: {
		paddingLeft: 20,
	},
	yuehui: {
		paddingLeft: 20,
		color: '#55a40f',
		marginTop: 10,
		marginBottom: 10
	},
	yue: {
		width: 88,
		height: 88
	},
	marginL: {
		marginLeft: 30
	},
	part_1: {
		flex: 1,
	},
	part_r: {
		flex: 2,
	}
});

AppRegistry.registerComponent('rn', () => rn);
