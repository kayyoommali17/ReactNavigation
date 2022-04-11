import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';


//const Stack = createNativeStackNavigator();

export default function ProductCategory() {
   const navigation = useNavigation();
  return (
      
    <View style={styles.Container}>
      <Text>{'Product Category Screen'}</Text>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductInfo')}>
          <Text style={styles.txt}>{'Product Info'}</Text>
        </TouchableOpacity>
        {/* <Image  source={require('./src/assests/images/icCheck_2022-03-24')}/> */}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
       // color:'blue'
        //]backgroundColor:'yellow'
      },
      txt:{
        color:'blue',
        
    }
})