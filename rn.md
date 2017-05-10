
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




