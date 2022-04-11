import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProductCategory from './ProductCategory'
import Register from './Register'
import ProductInfo from './ProductInfo';
import Login from './Login'


const Tab = createBottomTabNavigator();


export default function MainHomeFile() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ProductCategory"
          component={ProductCategory}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit.png')
                    : require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit.png')
                }
                style={{width: 20, height: 20,borderRadius:50}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit.png')
                    : require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit.png')
                }
                style={{width: 20, height: 20,borderRadius:50}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit.png')
                    : require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit.png')
                }
                style={{width: 20, height: 20,borderRadius:50}}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
