
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

