
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "./src/screens/indexscreen"
import{BlogProvider} from "./src/context/BlogContext"

const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexScreen} options={{ title: 'Blogs' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
    
  );
}

