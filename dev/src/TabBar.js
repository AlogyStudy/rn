import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	ScrollView,
	ListView,
	AlertIOS,
	TabBarIOS
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');


export default class Share extends Component {
	
	// 设置初始值
	constructor(props) {
		super(props);
		
		this.state = {
			// 选中的TabBarItem
			selectdTabBarItem: 'home'
		}
	}
	
	renderView() {
		
	}
	
	render() {
		return (
			<View style={styles.container}>
				{/* 头部 */}
				<View style={styles.headerViewStyle}>
					<Text>Tab选项卡的切换</Text>
				</View>
				
				{/* 选项卡 */}
				<TabBarIOS
					style={{width: width}}
					barTintColor='black'
					tintColor='purple'
				>
					{/* 第一块 */}
					<TabBarIOS.Item
//						systemIcon='home',
						title="HOME"
						badge='3'
						selected={this.state.selectdTabBarItem == 'home'}
						onPress={() => { this.setState({selectdTabBarItem: 'home'}) } }
					>
						<View　style={[styles.commonViewStyle, {backgroundColor: 'tomato'}]}>
							<Text>首页</Text>
						</View>
					</TabBarIOS.Item>
					
					{/* 第二块 */}
					<TabBarIOS.Item
						systemIcon='bookmarks'
						selected={this.state.selectdTabBarItem == 'bookmarks'}
						onPress={() => { this.setState({selectdTabBarItem: 'bookmarks'}) } }
					>	
						<View　style={[styles.commonViewStyle, {backgroundColor: 'cyan'}]}>
							<Text>第二页</Text>
						</View>
					</TabBarIOS.Item>
					
					{/* 第三块 */}
					<TabBarIOS.Item
						systemIcon='downloads'
						selected={this.state.selectdTabBarItem == 'downloads'}
						onPress={() => { this.setState({selectdTabBarItem: 'downloads'}) } }
					>
						<View　style={[styles.commonViewStyle, {backgroundColor: 'tan'}]}>
							<Text>第三页</Text>
						</View>
					</TabBarIOS.Item>
					
					{/* 第四块 */}
					<TabBarIOS.Item
						systemIcon='serach'
						selected={this.state.selectdTabBarItem == 'serach'}
						onPress={() => { this.setState({selectdTabBarItem: 'serach'}) } }
					>
						<View　style={[styles.commonViewStyle, {backgroundColor: 'pink'}]}>
							<Text>第四页</Text>
						</View>
					</TabBarIOS.Item>
				</TabBarIOS>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	commonViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerViewStyle: {
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40
	}
});

