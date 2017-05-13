/**
 * Home
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';



export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          Home
		        </Text>
		    </View>
		);
	}
}

const styles = StyleSheet.create({});