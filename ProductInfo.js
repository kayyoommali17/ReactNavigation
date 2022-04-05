import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductInfo () {
  return (
    <View style={styles.Container}>
      <Text>{'Product Information'}</Text>
      {/* <View>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductInfo')}>
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
        marginTop:20
        //backgroundColor:'yellow'
      },
})