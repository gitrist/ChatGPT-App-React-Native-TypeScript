import React, { useState }from 'react';
import { FlatList, StyleSheet, View, Image, Text, ImageSourcePropType, TouchableOpacity  } from 'react-native';

import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';

type GameType = {
	uri: string;
	pic: ImageSourcePropType ;
	des: string;
}

const allGames: GameType [] = [
	{
		uri: 'https://www.yikm.net/play?id=4137&n=L2Zjcm9tL3NqL0NvbnRyYSAoVSkgWyFdLm5lcw==&t=%E9%AD%82%E6%96%97%E7%BD%97(%E7%BE%8E%E7%89%88)&ac=3&p=/fcpic/sj/436a.png',
		pic: require('../assets/hundouluo.jpg'),
		des: '魂斗罗'
	},
	{
		uri: 'https://www.yikm.net/play?id=4275&n=L2Zjcm9tL3h5eC9CYXR0bGUgQ2l0eSAoSikgWyFdLm5lcw==&t=%E5%9D%A6%E5%85%8B%E5%A4%A7%E6%88%98&ac=3&p=/fcpic/xyx/timg.png',
		pic: require('../assets/tanke.jpg'),
		des: '坦克'
	}
]

const HomeScreen = () => {
	const [messages, setMessages] = useState<GameType[]>(allGames);
	const navigation = useNavigation() as any

	const GameCard = function (props: {item: GameType}) {
		const {pic, des, uri} =  props.item
		return (
			<View>
				<TouchableOpacity onPress={() => navigation.navigate('Games', {uri})}>
					<Image style={styles.Image} source={pic} />
					<Text style={styles.Text}>{des}</Text>
				</TouchableOpacity>
			</View>
		)
	}
	return (
		<Layout>
			<FlatList
				style={styles.listContainer}
				data={messages}
				renderItem={({ item }) => <GameCard item={item}/>}
				keyExtractor={(item) => item.uri}
			/>
		</Layout>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		height: '100%',
		padding: 20,
		backgroundColor: '#132425',
	},
	Image: {
		width: 100,
		height: 100,
		borderRadius: 8,
	},
	Text: {
		width: 100,
		padding: 10,
		color: '#fff',
		textAlign: 'center'
	}
});

export default HomeScreen;
