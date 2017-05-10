import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable
} from 'react-native';


let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

export default class rn extends Component {
  render() {
    return (
      <View style={styles.container}>
      	{/* 头像 */}
      	<Image source={require('./../img/icon.png')} style={styles.titleImg}  />
      	
      	{/* form */}
      	<TextInput placeholder={'请输入用户名'} style={[styles.InputBg]} />
      	<TextInput placeholder={'请输入密码'}  password={true} style={[styles.InputBg]} />
      	
      	{/* 登录  */}
      	<View style={styles.loginBtn}>
      		<Text style={styles.loginTxt}>登录</Text>
      	</View>
      	
      	{/* 设置 */}
      	<View style={styles.set}>
	      	<Text style={styles.noLogin}>无法登录</Text>
	      	<Text style={styles.noLogin}>新用户</Text>
      	</View>
      	
      	{/* 其它登录方式 */}
      	<View style={styles.otherLogin}>
      		<Text style={styles.otherTxt}>其它方式登录:</Text>
      		<Image style={styles.otherImg} source={require('./../img/icon3.png')} />
      		<Image style={styles.otherImg} source={require('./../img/icon7.png')} />
      		<Image style={styles.otherImg} source={require('./../img/icon8.png')} />
      	</View>
      	
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#efefef',
		alignItems: 'center'
	},
	titleImg: {
		width: 100,
		height: 100,
		marginTop: 60,
		marginBottom: 60,
		borderRadius: 100,
		borderWidth: 4,
		borderColor: '#fff'
	},
	InputBg: {
		width: width,
		height: 40,
		marginBottom: 1,
		backgroundColor: '#fff',
		borderBottomColor: '#ddd',
		borderWidth: 0,
		textAlign: 'center'
	},
	loginBtn: {
		width: width - 40,
		height: 40,
		backgroundColor: 'skyblue',
		borderRadius: 8,
		marginTop: 40,
		marginBottom: 40
	},
	loginTxt: {
		textAlign: 'center',
		fontSize: 22,
		lineHeight: 36,
		color: '#fff'
	},
	set: {
		flexDirection: 'row',
		width: width - 40,
		justifyContent: 'space-between'
	},
	noLogin: {
		color: 'skyblue',
		fontSize: 14
	},
	otherLogin: {
		flexDirection: 'row',
		width: width - 40,
		alignItems: 'center',	
		position: 'absolute',
		bottom: 40
	},
	otherTxt: {
		lineHeight: 18,
		marginLeft: 10
	},
	otherImg: {
		width: 30,
		height: 30,
		marginLeft: 10,
		borderRadius: 25
	}
});
