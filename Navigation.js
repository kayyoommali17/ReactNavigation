import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register from './Register'
import Login from './Login';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();


export default function MainHomeFile() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/home.png')
                    : require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/HomeLight12.jpeg')
                }
                style={{width: 20, height: 20}}
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
                    ? require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/edit1.png')
                    : require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/editLight.png')
                }
                style={{width: 20, height: 20}}
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
                    ? require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/user.png')
                    : require('/Users/appinventiv/Desktop/Proj/src/assests/images/CrossImage/LoginLight.png')
                }
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
