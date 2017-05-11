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
			dataSource: ''			
		};
	}
	
	// 加载数据，处理数据需要的格式
	loadDataFromJson() {
		// 获取JSON数据
		let JSONData = Car.data;
		let dataBlob = {}, sectionIDs = [], rowIDs = [],　cars = [];
		
		for (let i=0; i<JSONData.length; i++) {
			// 把组号放置sectionIDs数组中
			sectionIDs.push(id);
			// 设置 组的dataBlob对象的中
			dataBlob[i] = JSONData[i].title;
			
			// 取出所有的车数组
			cars = JSONData[i].cars;
			rosIDs[i] = [];
			
			for (let j=0; j<cars.length; j++) {
				// 把行号放入rowIDs
				rowIDs[i].push(j);
				dataBlob[i + ':' + j] = cars[j];
			}
			
		}
		
		
		// 更新状态
		this.setState({
			dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
		})
	}
	
	// 设置渲染 ：数据请求　或者异步操作（定时器）
	componentDidMount() {
		//　调用JSON数据
		this.loadDataFromJson();
	}
	
	render() {
		return (
			<ListView
				dataSource 		
			/>
		);
	}
}

const styles = StyleSheet.create({
	
});
