import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './HomeScreen';
import ProductCategory from './ProductCategory';
import ProductInfo from './ProductInfo';

const Stack = createNativeStackNavigator();

export default function MainHomeFile() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductCategory" component={ProductCategory} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
