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



export default class My extends Component {
	render() {
		return(
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          mine
		        </Text>
		    </View>
		);
	}
}

const styles = StyleSheet.create({});