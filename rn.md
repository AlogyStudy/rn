
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

焦点图，引导页.

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


