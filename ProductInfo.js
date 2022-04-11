import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';


//const Stack = createNativeStackNavigator();

export default function ProductInfo() {
   // const navigation = useNavigation();
  return (
      
    <View style={styles.Container}>
      <Text>{'Product Information'}</Text>
      {/* <View>
        <TouchableOpacity onPress={()=>navigation.navigate('')}>
          <Text style={styles.txt}>{'product Info'}</Text>
        </TouchableOpacity>
      </View> */}

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