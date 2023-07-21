import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import { WebView } from 'react-native-webview';


import Layout from '../components/Layout';


const HomeScreen = () => {

	return (
		<WebView
				originWhitelist={['*']}
				source={{ uri: 'https://www.yikm.net/play?id=4137&n=L2Zjcm9tL3NqL0NvbnRyYSAoVSkgWyFdLm5lcw==&t=%E9%AD%82%E6%96%97%E7%BD%97(%E7%BE%8E%E7%89%88)&ac=3&p=/fcpic/sj/436a.png' }}
			/>
	);
};

export default HomeScreen;
