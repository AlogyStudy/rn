/**
 * LaunchImage
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,	
	Image
} from 'react-native';


export default class LaunchImage extends Component {
	render() {
		return(
			<Image source={require('../../../img/launchimage.png')} style={styles.launchImageSty} />
		);
	}
}

const styles = StyleSheet.create({
	launchImageSty: {
		flex: 1
	}
});