/**
 * Seller
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';



export default class Seller extends Component {
	render() {
		return(
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          Seller
		        </Text>
		    </View>
		);
	}
}

const styles = StyleSheet.create({});