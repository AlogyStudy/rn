import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Touchable
} from 'react-native';

let Dimensions = require('Dimensions');
let {
	width
} = Dimensions.get('window');

export default class rn extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			person: 'ct'
		}
	}
	
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
}

const styles = StyleSheet.create({});