/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput
} from 'react-native';

/*import App from './src/App';

export default class rn extends Component {
  render() {
    return (
    	<App />	
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('rn', () => rn);*/



// Image **********************************************************************************************

// 导入json数据
/*const BadgeData = require('./src/mork/BadgeData.json');

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

export default class rn extends Component {
	
	// 返回icon
	renderAllBadge() {
		let allBadge = [];
		let imgArr = [];
		if (BadgeData.error == 0) {
			let badge = BadgeData.data;
			
			for (let i=0; i<badge.length; i++) { // {icon: '', title: ''}
				let tmp = badge[i];
				allBadge.push(
					<View key={i} style={[styles.outViewSty]}>
						{/* source={require('./img/images/' + tmp['icon'] + '.png') *}
		    			<Image } style={styles.imagesSty} />
		    			<Text style={styles.textSty}>{tmp['title']}</Text>
		    		</View>
				);
			}
		}
		return allBadge;
	}
	
	render() {
		return(
			<View style={[styles.contailer]}>
	    		{ /* 返回十个icon (只要不是常量，都使用`{}` 模板解析) *}
	    		{this.renderAllBadge()} 
    		</View>
		);
	}
}

const styles = StyleSheet.create({
	contailer: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	outViewSty: {
		justifyContent: 'center',
		alignItems: 'center',
		width: width / 5,
		height: 100,
		marginBottom: 20,
		paddingLeft: 10,
		paddingRight: 10
	},
	imagesSty: {
		width: 80,
		height: 80,
		backgroundColor: 'tan'
	},
	textSty: {
		lineHeight: 30
	}
});

AppRegistry.registerComponent('rn', () => rn);*/


// TextInput ********************************************************

// TextInput  类似 iOS中的 UITextField
// TextInput 继承自 View

/*export default class rnTextInput extends Component {
  render() {
    return (
    	<View>
    		<TextInput style={[styles.styleInp]} 
    			placeholder="placeholder"
    			keyboardType={'number-pad'} 
    			password={true} 
    			// 关闭按钮出现的位置
    			clearButtonMode={'always'}
    			// 多行显示
//  			multiline={true}
			/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	styleInp: {
		backgroundColor: 'pink'
	}
});

AppRegistry.registerComponent('rn', () => rnTextInput);*/



// QQ登录界面 ********************************************************


/*import Login from './src/loginView';

export default class rnQQView extends Component {
	render() {
		return (
			<Login />
		);
	}
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('rn', () => rnQQView);
*/

// Touchable *******************************************

/*import Touchable from './src/Touchable';

export default class rnTouchable extends Component {
	render() {
		return (
			<Touchable />
		);
	}
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('rn', () => rnTouchable);

*/


// Life Cycle *********************************************

/*
import LifeCycle from './src/LifeCycle';

export default class rnLifeCycle extends Component {
	render() {
		return (
			<LifeCycle age={20} />
		);
	}
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('rn', () => rnLifeCycle);
*/


// rnScrollView  ***************************************

import ScrollView from './src/ScrollView';

export default class rnScrollView extends Component {
	render() {
		return (
			<ScrollView />
		);
	}
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('rn', () => rnScrollView);

