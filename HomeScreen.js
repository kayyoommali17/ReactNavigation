import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text>{'Home Screen'}</Text>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductCategory')}>
          <Text style={styles.txt}>{'Go To Product Category'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'yellow'
  },
  txt:{
      color:'blue',
      
  }
});
