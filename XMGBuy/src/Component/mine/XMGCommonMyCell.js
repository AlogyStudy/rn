/**
 * XMGCommonMyCell
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';


export default class XMGCommonMyCell extends Component {
  static defaultProps = {
      leftIconName: '',
      leftTitle: '',
      rightIconName: '',
      rightTitle: ''
  }

  // 渲染right 的图片或者文字
  _renderTextorImg() {
    // 返回文字
    if (this.props.rightTitle) {
      return (
        <Text>{this.props.rightTitle}</Text>
      );
    }
    // 返回图片
    if (this.props.rightIconName || this.props.rightIconName.length === 0) {
      return (
        <Image source={{uri: rightIconName}} style={{width: 20, height: 10, backgroundColor: 'pink'}} />
      );
    }
    // 默认返回空值
    return;
  }

  // 渲染右边视图
  _renderRightView() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
        {this._renderTextorImg()}
        {/* 箭头 */}
        <Image source={require('../../../img/icon_cell_rightarrow.png')} style={{width: 8, height: 13, marginLeft: 10}} />
      </View>
    );
  }

	render() {
		return(
			  <View style={styles.myCellContainer}>
          {/* left */}
          <View style={styles.leftViewSty}>
            <Image source={{uri: this.props.leftIconName}} style={{width: 30, height: 30, backgroundColor: 'cyan', marginLeft: 10, marginRight
            :10}} />
            <Text>{this.props.leftTitle}</Text>
          </View>
          {/* right */}
          <View style={styles.rightViewSty}>
            {this._renderRightView()}
          </View>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
  myCellContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:  Platform.OS === 'ios' ? 64 :  44,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    backgroundColor: 'white' 
  },
  leftViewSty: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});