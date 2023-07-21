import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DataProvider } from './context/DataProvider';

import HomeScreen from './screens/HomeScreen';
import Games from './screens/Games';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<DataProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={() => ({
							title: 'Games',
							contentStyle: {backgroundColor: '#232425', height: '100%'},
							headerStyle: { backgroundColor: '#232425' },
							headerTitleStyle: { color: '#fff' },
							headerTintColor: '#fff',
						})}
					/>
 				<Stack.Screen name="Games" component={Games} />
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>
	);
}
