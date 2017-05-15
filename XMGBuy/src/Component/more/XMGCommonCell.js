/**
 * CommonCell
 * 
 * @param {String} title 文字标题
 * @param {Boolean} isSwitch 是否显示按钮
 * @param {String} rightTxt 箭头右侧显示文字
 * 
 * @example
 * <CommonCell title="扫一扫" />
 * <CommonCell title="省流量模式" isSwitch={true} />
 * <CommonCell title="清空缓存" rightTxt="10M" />
 * 
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
  Image,
  TouchableOpacity,
  Platform,
  Switch
} from 'react-native';


export default class CommonCell extends Component {
  static defaultProps = {
    title: '', // 标题
    isSwitch: false, // 是否展示开关
    rightTxt: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      isOn: false   
    }
  }

  // 渲染右边文字
  _renderTxt() {
    if (!this.props.rightTxt) return;
    return (
      <Text style={{marginRight: 10}}>{this.props.rightTxt}</Text>
    );
  }

  // 渲染右边箭头 或者开关
  _renderRightView() {
    if (!this.props.isSwitch) {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {this._renderTxt()}
          <Image source={require('../../../img/icon_cell_rightarrow.png')} style={{width: 8, height: 13}} />
        </View>
      );
    } else {
      return (
        <Switch value={this.state.isOn} onValueChange={() => {this.setState({isOn: !this.state.isOn})}} />
      )
    }
  }

	render() {
		return(
      <TouchableOpacity onPress={() => {alert('click');}}>
			  <View style={styles.commonCellWrap}>
          {/* 左边 */}
          <Text>{this.props.title}</Text>
          {/* 右边 */}
          {this._renderRightView()}
		    </View>
      </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
  commonCellWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:  Platform.OS === 'ios' ? 64 :  44,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    backgroundColor: 'white'
  }
});