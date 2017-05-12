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
	AlertIOS
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

let Car = require('./mork/Car.json');

export default class Share extends Component {
	constructor(props) {
		super(props);
		
		let getSectionData = (dataBlob, sectionID) => {
			return dataBlob[sectionID];	
		};
		let getRowData = (dataBlob, sectionID, rowID) => {
			return dataBlob[sectionID + ':' + rowID];
		};
		let ds = new ListView.DataSource({
			getSectionData: getSectionData, // 获取组中的数据
			getRowData: getRowData, // 获取行中的数据
			rowHasChanged: (r1, r2) => r1 != r2,
			sectionHeaderHasChanged: (s1, s2) => s1 != s2
		});
		this.state = {
			dataSource: ds			
		};
	}
	
	// 加载数据，处理数据需要的格式
	loadDataFromJson() {
		// 获取JSON数据
		let JSONData = Car.data;
		let dataBlob = {}, sectionIDs = [], rowIDs = [],　cars = [];
		
		// 处理数据格式
		for (let i=0; i<JSONData.length; i++) {
			// 把组号放置sectionIDs数组中
			sectionIDs.push(i);
			// 设置 组的dataBlob对象的中
			dataBlob[i] = JSONData[i].title;
			
			// 取出所有的车数组
			cars = JSONData[i].cars;
			rowIDs[i] = [];
			
			for (let j=0; j<cars.length; j++) {
				// 把行号放入rowIDs
				rowIDs[i].push(j);
				dataBlob[i + ':' + j] = cars[j];
			}
		}
		
		// 更新状态
		this.setState({
			dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
		});
	}
	
	// 每一行数据
	_renderRow(rowData) {
		return (
			<TouchableOpacity activeOpacity={0.5}>
				<View style={styles.rowStyle}>
					<Image source={{uri: rowData.icon}} style={{width: 40, height: 40, backgroundColor: 'tomato', marginLeft: 10, marginRight: 10}} />
					<Text style={{lineHeight: 26}}>{rowData.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
	
	//　渲染组
	_renderSectionHeader(setionData, sectionID){
		return (
			<View style={styles.setionViewStyle}>
				<Text style={{lineHeight: 26, color: 'tomato'}}>{setionData}, {sectionID}</Text>
			</View>
		);
	}
	
	// 设置渲染 ：数据请求　或者异步操作（定时器）
	componentDidMount() {
		//　调用JSON数据
		this.loadDataFromJson();
	}
	
	render() {
		return (
			<View style={styles.outerViewStyle}>
				{/* 头部 */}
				<View style={styles.headerViewStyle}><Text>SeeMyGo品牌</Text></View>
				{/* 列表渲染 */}
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					renderSectionHeader={this._renderSectionHeader}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	outerViewStyle: {
		flex: 1,
	},
	headerViewStyle: {
		height: 40,
		backgroundColor: '#eee',
		
		// 居中
		justifyContent: 'center',
		alignItems: 'center'
	},
	rowStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: '#e8e8e8',
		borderBottomWidth: 0.5,
		padding: 10
	},
	setionViewStyle: {
		width: width,
		height: 30,
		backgroundColor: '#ddd'
	}
});
