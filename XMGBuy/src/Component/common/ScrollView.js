/**
 * ScrollView
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';



export default class ScrollView extends Component {
	render() {
		return(
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          ScrollView
		        </Text>
		    </View>
		);
	}
}

const styles = StyleSheet.create({});