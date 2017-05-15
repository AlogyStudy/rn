/**
 * 公共样式
 */

import {
  Platform
} from 'react-native';

exports.STYLE = {
  // 头部样式 strat
  navBarSty: {
		height: Platform.OS == 'ios' ? 84 : 64,
		backgroundColor: 'rgba(255, 96, 0, 1.0)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
  textColor: {
    color: 'white',
    fontSize: 20
  },
  iconPosition: {
    position: 'absolute',
    right: 20
  }
  // 头部样式 end
}
