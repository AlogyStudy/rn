
## index.xx.js

```
import {
	AppRegist, // 注册
	StyleSheet, // 样式
	Text, // 文本组件
	View, // 视图组件
	Image, // 图片组件
	TextInput // input组件		
} from 'react-native';

class AHelloWorld extends Component {
	// 初始化方法 --> viewDidLoad --> 用来返回具体组件内容
	// 结构和内容
	render() {
		return ();
	}
}

// 样式
const styles = StyleSheet.create({
	
});

```

## View

iOS中的UIView，Android中的android.view或是网页中<div> ,它是所有组件父组件。

`FlexBox` 弹性布局
`Transforms` 动画属性
`backfaceVisibility` 定义界面翻转的时候是否可见
`elevation` number 高度 设置Z轴， 可产生立体效果。


`<View>` 设置 flex: 1占满整屏幕。没有设置flex，内容占多大，就多大。


## flex

flex设置父级，影响子级。
{flex: 1} 占满父控件

改变主轴方向：`flexDireaction` ： `row`, `cloumn`

主轴对齐方式： `justifyContent`: 'space-between'

侧轴对齐方式： `alignItems` : `flex-end`, `stretch`, `center`

是否换行：  `flexWrap` 



## 屏幕分辨率

Demesions 模块

宽度：Demesions.get('window').width
高度：Demesions.get('window').height
分辨率：Demesions.get('window').scale

{
	flex: 1,
	justrifyContent: 'center',
	alignItems: 'center'
}

1dp = 2px

## Image组件

1. 从项目中加载：require
2. 从app中： require，和 uri
3. 从网络： uri

显示方式：

1. Image.resezeMode.cover
2. Image.resezeMode.contain
3. Image.resezeMode.stetch


## TextInput

TextInput  类似 iOS中的 UITextField
TextInput 继承自 View

value
onChangeText
keyboardType  键盘类型
```
enum('default', 'ascii-capable', 'url', 'number-pad');
```
password true 为 密码框 (多行文本属性设置上，密码失效)
multiline true 多行文本
placeholder  占位

clearButtonMode 清楚按钮出现在文本左侧的时机
```
enmu('never', 'while-editing', 'unless-editing', 'always');

while-editing 编辑的时候出现
always 一直都出现
never 永远不出现
```


## Touchable系类组件

Touchable触摸交互组件

TouchableOpacity, 点击闪烁控件
`activeOpaicty`属性 : 设置透明度

TouchableHighlight, 

```
<TouchableOpacity activeOpaicty={0}>
	<View><Text>Text, Click me</Text></View>
</TouchableOpacity>
```

在开发中经常使用到点击，按下，抬起，长按等触发事件，在 `TouchableOpacity` 中如何展示

`onPress` 点击
`onPressIn` 按下
`onPressOut` 抬起
`onLongPress` 长按不放

```
<TouchableOpacity 
	activeOpaicty={0.8}
	onPress={ () => { alert('点击') } }	
	onPressIn={ () => { alert('按下') } }	
	onPressOut={ () => { alert('抬起') } }	
	onLongPress={ () => { alert('长按不放') } }	
>
	<View><Text>Text, Click me</Text></View>
</TouchableOpacity>
```

常用事件

```
export default class rn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '不透明触摸'
		}
	}
	
	// 当鼠标按下
	renderPress() {
		alert('鼠标按下');
	}
	
	activeEvent(EventTxt) {
		this.setState({
			title: EventTxt
		});
	}
	
	render() {
		return(
			<View style={styles.container}>
      	<TouchableOpacity 
      		activeOpaicty={0.8}
      		onPress={ () => this.activeEvent('点击') }	
      		onPressIn={ () => this.activeEvent('按下') }	
      		onPressOut={ () => this.activeEvent('抬起') }	
      		onLongPress={ () => this.activeEvent('长按不放')}	
  		>
      		<View><Text>Text, Click me</Text></View>
      		<View><Text>{this.state.title}</Text></View>
      	</TouchableOpacity>
      </View>
		);
	}
	
}
```

## 生命周期

getDefaultProps 固定不变的属性 ， 拿去使用的是`this.props`
getInitialState 经常改变的属性，  拿去使用的是`this.state`

一旦调用了this.setState方法，组件一定会调用render方法，对组件进行再次的渲染，
不过，如果React框架会自动更具DOM的状态来判断是否真正需要渲染. (虚拟DOM进行diff算法)


`componentDidMount`: 在render之后，页面已经渲染出来之后，可以进行一些复杂的操作。
比如：网络操作，异步请求，耗性能操作.


react 中，组件看成状态机.


```
export default class rn extends Component {
	
	constructor(props) { // 相当于  （getInitialState） 定义初始化的值
		super(props);
		this.state = {
			person: 'ct'
		}
	}
	
	render() {
		return(
			<View style={styles.container}>
		      	<Text>{this.state.person} {this.props.age}</Text>	
		    </View>
		);
	}
}
```


## ref

声明：标签中定义`ref`自定义属性名
获取：通过`this`获取`this.ref.属性名`

```
views() {
	// 获取DOM
	alert(this.refs.topView);
}

render() {
	return(
		<View style={styles.container} ref="topView" onPress={this.views}>
	      	<Text>{this.state.person} {this.props.age}</Text>	
	    </View>
	);
}
```


## ScrollView

焦点图，引导页，滑动的列表

样式继承自 View

**要点**
1. ScrollView必须有一个确定的高度，才能正常工作。
	①  直接给该ScrollView设置高度(不建议)
	②  ScrollView中不要加{flex: 1}, (设置ScrollView里面内容高度，ScrollView的高度，由内容撑起来)
2. ScrollView内部的其它响应者 无法阻止ScrollView本身成为响应者。（ScrollView的响应在最上层）


**常用属性**

`conentContainerStyle` 样式应用到一个内层内容容器上，所有的子视图都会包裹在内容容器内。
`horizontal`： true 。所有子视图都会水平排列。
`showsVerticalScrolllndicator` ： true 是否应用弹簧效果.
`showsHorizontalScrollIndicator`: false  隐藏滚动条


iOS底下的动画特效
`pagingEnabled`: true 滚动条会停在滚动视图的尺寸的整数倍位置。可以使用水平分页上。
`scrollEnabled` : false 不能允许滚动


```
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
```
-----

**焦点图**

```
import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Touchable,
	ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

// 引入计时器
let TimerMixin = require('react-timer-mixin');

// 引入JSON数据
let ImageData = require('./mork/ImageData.json');

export default React.createClass({
	// 注册计时器
	mixins: [TimerMixin],

	// 设置固定值
	getDefaultProps() {
		return {
			// 设置timer
			timers: 2500
		}
	},

	// 设置可变的和初始值
	getInitialState() {
		return {
			// 当前页码
			idx: 0
		}
	},

	// 图片
	renderAllImage() {
		let allImg = [];
		let allData = ImageData.data;
		let colors = ['skyblue', 'pink', 'cyan', 'tan', 'tomato'];
		
		let ArrDataUrl = [];
		for (let j=0; j<allData.length; j++) {
			ArrDataUrl.push('./../img/scrollImg/' + allData[j]['img'] + '.png');
		}
		
		for (let i=0; i<allData.length; i++) {
			let imgItem = allData[i];
//			let ctImg = './../img/scrollImg/' + imgItem['img'] + '.png';
//			source={require(ArrDataUrl[i])}
			allImg.push(
					<View key={i} style={{backgroundColor: colors[i], width: width, height: 120}}>
						<Image style={{width: width, height: 120}} />
						<Text>{i}</Text>
					</View>
				);
		}
		return allImg;
	},

	// 小圆点
	renderPageCircle() {
		let allCircle = [];	
		let allData = ImageData.data;
		let styls;

		for (let i=0; i<allData.length; i++) {
			styls =  i == this.state.idx ? {color: 'orange'} : {color: '#fff'};
			allCircle.push(
				<Text key={i} style={[{fontSize: 25}, styls]}>&bull;</Text>
			);	
		}

		return allCircle;
	},

	// 一帧滚动结束
	onAnimationEnd(ev) {
		// 1. 水平方向的偏移量
		let offSetX = ev.nativeEvent.contentOffset.x;
		console.log(offSetX, 'offSetX');
		// 2. 求出当前页数
		let currentPage = Math.floor(offSetX / width);

		// 更新状态机，重新绘制UI
		this.setState({
			idx: currentPage
		});
	},
	
	// 开启定时器
	startTimer() {
		// 添加定时器
		this.setInterval(this.timers, this.props.timers);
	},
	
	timers() {
		// 获取 ScrollView DOM 对象
		let scrollView = this.refs.scrollView;
		
		// 设置圆点
		let activePage = 0;
		let imgCount = ImageData.data.length; // 图片总数
		// 置前判断
		if ((this.state.idx+1) >= imgCount) {
			activePage = 0;
		} else {
			activePage = this.state.idx+1;
		}
		
		// 重新设置
		this.setState({
			idx: activePage		
		});
		
		// 图片滚动
		let offsetX = activePage * width;
		scrollView.scrollResponderScrollTo({x: offsetX, y: 0 , animated: true});
		
	},
	
	// 调用开始拖拽
	onScrollBeginDrag() {
		// 停止定时器
		this.clearInterval(this.timer);
	},
	
	// 停止拖拽
	onScrollEndDrag() {
		// 开启定时器
		this.timer = this.startTimer();
	},
	
	// 实现定时器
	componentDidMount() {
		// 开启定时器
		this.timer = this.startTimer();
	},
	
	// 渲染
	render() {
			return (<View style={styles.container}>
					<ScrollView 
						ref="scrollView"
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}		
						// 一帧滚动结束
						onMomentumScrollEnd={(ev) => this.onAnimationEnd(ev)}
						// 开始拖拽
						onScrollBeginDrag={this.onScrollBeginDrag}	
						// 停止拖拽
						onScrollEndDrag={this.onScrollEndDrag}
					>
					{this.renderAllImage()}
					</ScrollView>
					{/* 小圆点 */}
					<View style={styles.pageView}>{this.renderPageCircle()}</View>
				</View>);
	}
});

const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	pageView: {
		flexDirection: 'row',
		backgroundColor: 'tan',
		// 定位
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		width, width,
		height: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	}
});
```

## ListView

OC中的  UITableView

1. 设置数据源 （数组），通过ListView.DataSource();数据源 (通过diff算法)
2. 使用数据源实例化一个ListView组件，定义renderRow回调函数 （这个函数会接受数组中的每个数组作为参数，并返回一个可渲染的组件）


属性：
ListView继承自ScrollView

`dataSource`： 设置数据源
`renderRow()`: 渲染数据

```
// 导入JSON数据 
let Wine = require('./mork/Wine.json');

export default React.createClass({
	// 设置初始值
	getInitialState() {
		// 设置DataSource  // 在什么条件下创建数据源
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}); // sort	
		// 返回数据, 塞值
		return {
			dataSource: ds.cloneWithRows(Wine) // cloneWithRows 放置数组		
		}
	},
	
	// 渲染row，调用回调
	renderRow(rowData, sectionID, rowID, highlinghtRow) {
		console.log(rowData, sectionID, rowID, highlinghtRow);
		return (
			<TouchableOpacity activeOpacit={0.5}>	
				<View style={styles.cellViewStyle}>
					<Image source={{uri: rowData.image}} style={[styles.leftViewStyle ,{width: 60, height: 60, backgroundColor: 'cyan'}]} />
					<View style={styles.cellViewText}>
						<Text style={styles.cellViewTextTop}>{rowData.name}</Text>
						<Text style={styles.cellViewTextBottom}>￥{rowData.money}</Text>
					</View>
				</View>
			</TouchableOpacity>)
	},
	
	// 渲染
	render() {
		return (<ListView
				// 设置数据源
				dataSource={this.state.dataSource}
				// 渲染row，调用回调 , 没有手动调用，会自动传入4个参数。 分别为：rowData (一条数据), sectionID（分组ID）, rowID（行ID）, highlinghtRow（标记是否高亮选中）
				renderRow={this.renderRow}
			/>);
	}
});
```


> 在`getInitalState` 中设置初始值
```
// 设置DataSource 
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}); // sort	
// 返回数据, 塞值
return {
	dataSource: ds.cloneWithRows(Wine) // cloneWithRows 放置数组		
}
```
> 在自定义属性中调用
```
<ListView
// 设置数据源
dataSource={this.state.dataSource}
// 渲染row，调用回调 , 没有手动调用，会自动传入4个参数。 分别为：rowData (一条数据), sectionID（分组ID）, rowID（行ID）, highlinghtRow（标记是否高亮选中）
renderRow={this.renderRow}
/>
```

> 在 `renderRow()` 回调函数 中渲染视图


**九宫格**

对ListView的操作时纵向的，如果是横向的，则需要设置ListView 的ContentContainerStyle属性，添加flexDirection: 'row',
让多个ListView在同一行显示，而且通过flexWrap: 'warp'进行换行。


```
let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

let shareData = require('./mork/shareData.json');

// 常量设置
let clos = 3; // 显示几行
let cellWH = 100; // icon 宽高
let vMargin = (width - cellWH * clos) / (clos + 1);
let vHmargin = 25;


export default class Share extends Component {
	// 设置初始值
	constructor(props) {
		super(props);
		
		// 在什么条件下创建数据源
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		
		// 设置值
		this.state = {
			dataSource: ds.cloneWithRows(shareData.data)
		}
	}
	
	// 渲染
	renderRow(rowData, sectionID, rowID, highlinghtRow) {
		console.log(rowData);
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={this._onPressButton}>
				<View style={styles.shareViewWrap}>
					<Image source={{uri: rowData.icon}} style={{width: 50, height: 50, backgroundColor: 'tomato'}} />
					<Text style={styles.titleView}>{rowData.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
	
	// 执行跳转
	_onPressButton() {
		alert(123123);
	}
	
	render() {
		return (
			<ListView
				contentContainerStyle={styles.container}
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: width,
		// 多行显示
		flexWrap: 'wrap'
	},
	shareViewWrap: {
		width: cellWH,
		height: cellWH,
		marginLeft: vMargin,
		marginBottom: vHmargin,
		
		// 居中
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleView: {
		lineHeight: 30
	}
});
```


## 吸顶效果

如何实现滚动时每个section header会吸顶?
一个方法，三个属性。
`cloneWithRowsAndSecions()`: 将dataBlob(object), sectionIDs(array), rowIDs(array) 三个值传进去.

`dataBlob`: 包含ListView所需的所有数据（section header 和 rows）， 在ListView渲染数据时，使用getSectionData 和 getRowData来渲染每一行数据。
dataBlob的key值包含sectionID + rowID  (一个二维数组)
`sectionIDs`: 用于标识每组section
`rowIDs`: 描述每个section里的每行数据的位置及是否要渲染。


`renderSectionHeader`: 渲染组,参数：`setionData` 组内容, `sectionID`组号
`renderRow`: 渲染行，　参数：　`rowData`行内容, `sectionID`组ID, `rowID`行ID, `highlinghtRow`高亮行

> 模拟对应的数据结构

```
var dataBlol = {
	'sectionID1': { ...section1 data},
	'sectionID1:rowID1': { ...row1 data},
	'sectionID1:rowID2': { ...row2 data},
	'sectionID2': { ...section2 data},
	'sectionID2:rowID1': { ...row1 data},
	'sectionID2:rowID2': { ...row2 data},
}

var sectionIDs = ['sectionID1', 'sectionID2', ...];

var rowIDs = [['rowID1', 'rowID2'], ['rowID1', 'rowID2'], ...];
```

> 使用方式

```
var getSectionData = (dataBlob, sctionID) =>  {
	return dataBlob[sectionID];
}

var getRowData = (dataBlob, sectionID, rowID) => {
	return dataBlob[sectionID + ':' + rowID];
}

return {
	loaded: false,
	dataSource: new ListView.DataSource({
		getSectionData: getSectionData,
		getRowData: getRowData,
		rowHasChanged: (r1, r2) => r1 != r2,
		sectionHaderHasChanged: (s1, s2) => s1 != s2
	});
}
```
 
-----

**吸顶效果**

```
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
```


## TabBarIOS

界面与界面之间的平级关联

TabBar和TabBarIOS.Item

**TabBar属性**

View中的所有属性都可以被继承
`barTintColor`  color　设置tab条的背景的颜色
`tintColor` color 设置tab选中图标的颜色
`translucent` bool 设置Tab栏是不是透明的效果


**TabBarIOS.Item属性**

`badge` number 在图标的右上方显示小红色气泡，显示信息
`icon` Image.propTypes.source Tab按钮自定义的图标，　如果systemicon属性被定义了，那么该属性会被忽略
`onPress` function 当Tab按钮被选中的时候进行回调，可以设置selected={true}来设置组件被选中
`selected` bool 该属性标志子页面是否可见。 true　被选中
`selectIcon` Image.propTypes.srouce 设置当前选择的图标按钮.
`style` 设置样式风格，继承View的样式各种风格
`title`　string 图标底下的标题
`systemIcon`　系统图标 　enum() 使用了系统就不可以自定义，会被这些图标覆盖。


1. TabBar 和　TabBarIOS.Item　基本结构
2. 处理点击效果

**TabBarIOS实现案例效果**

```
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
```


## Navigator && NavgatorIOS

界面与界面之间的上下级关联

> NavgatorIOS

`NavgatorIOS`　包装了　UIKit的导航功能,　可以使用左划功能来返回到上一界面。

**方法**  

相当于操作栈.

常用：
`push(route)`　导航器跳转到一个新的路由
`pop()` 回到上一页
`popN(n)` 回到N页之前。当N=1的时候，效果和 pop()一样。
`replace(route)` 替换当前页的路由，并立即加载新路由的视图。

了解：
`replacePrevious(route)`　替换上一页的路由/视图
`replacePreviousAndPop(route)`替换上一页的路由/视图并且立刻切换回上一页
`resetTo(route)` 替换最顶级的路由并且回到它

**属性**

`barTintColor` string 导航条的背景颜色
`tintColor` 　string 设置导航条前景色

`initalRoute` Navigator使用"路由"对象来包含要渲染的子视图，它们的属性，以及导航条配置。`push`和任何其它的导航函数的参数都是这样的路由对象。
跳转路由的具体信息，　页面前后跳转的需要参数配置
```
{
	component: function, // 路由到对应的版块（组件）
	title: string, // 标题
	passProps: object, // 传递的参数 , 往下一个页面传递的参数
	backButtonIcon: Image.propTypes.source, // 返回按钮
	backButtonTitle: string, // 返回按钮标题
	leftButtonIcon: Image.propTypes.source,
	leftButtonTitle: string,
	onLeftButtonPress: function,
	rightButtonIcon: Image.propTypes.source,
	rightButtonTitle: string,
	onRightButtonPress: function,
	warpperStyle: [object Object]
}
```

**新闻列表页跳转详情页**

```
pushToNewsDetail(rowData) {
	// 通过　`this.props` 来操作
	this.props.navigator.push({
		title: '新闻详情', // title
		component: XMGNewsDetail,  // 组件
		passProps: {rowData}　// 携带参数
	});
}
```

> Navigator (过期，不适用)

核心要素：
navigator:用来管理所有界面对象的栈，称之为：`路由栈`或者`导航`
route: 路由栈里的每一个对象，称之为`路由`,用来存储每一个页面组件以及一些需要传递给对应界面的props参数


**属性**

通用模板
```
reutrn (
  <Navigator
    initialRoute={{name: name, component: component}}
    configureScene={() => {return Navigator.SceneConfigs.PushFromRight;}}
    renderScene={(route, navigator) => {
      let Component = route.component;
      return <Component {...route.passProps} navigator={navigator} />
    }}
  />
);
```
`initialRoute`: 初始化路由，需要在navigator栈底放置的路由，此时也是栈顶，因此是初始化整个App的首页.
`configureScene`: 设置页面切换动画
`renderScene`: 渲染当前路由场景， 渲染路由，回调方法里一个参数是当前路由route，另外一个是navigator路由栈


## WebView

`WebView`加载网站
`srouce`,　加载,解析html
`url`, 加载url,

```
var WebViewDemo = React.createClass({
  render: function() {
    return (
      <View style={{flex:1}}>
        <Text style={{height:40}}>简单的网页显示</Text>
        <WebView style={styles.webview_style} 
//        url={DEFAULT_URL}
          source={{html: '', baseUrl: ''}}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    );
  },
});
```


## 新闻项目

1. 创建基础文件
2. 设置`TabBarIOS`和　`NavigatorIOS`
3. 请求数据　fecth　
4. 处理数据
5. 渲染视图　＜LisrView /> <ScrollView />
6. 完成列表和焦点图
7. 处理跳转页面
```
//　跳转页面
this.props.navigator.push({
	component: NewsDetails, // 跳转组件
	title: rowData.title,　//　title
	passProps: rowData // 传递参数
});
```


## Platform

判断当前运行系统

```
Platform.OS === 'ios' ? 30 : 25
```