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
	TouchableHighlight
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

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
      		
      		<TouchableHighlight 
	          underlayColor="rgb(210, 230, 255)"
	          activeOpacity={0.5}  
	          style={{ borderRadius: 8,padding: 6,marginTop:5}}
	          >
	             <Text style={{fontSize:16}}>点击我</Text>
	        </TouchableHighlight>
      	</TouchableOpacity>
      </View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	},
});