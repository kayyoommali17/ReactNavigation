import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyNetwork() {
  return (
    <View style={styles.MainView}>
      <Text >{'MyNetwork'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    MainView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"green"
    }
})