import * as React from 'react';
import { WebView } from 'react-native-webview';

const Games = ({route}: any) => {

	console.log(route.params.uri)
	return (
		<WebView
				originWhitelist={['*']}
				source={{ uri: route.params.uri}}
			/>
	);
};

export default Games;
