import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.MainContainer}>
      <Text>{'You are at the Profile Screen'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer:{
    alignItems:'center',
    flex:1,
    //justifyContent:'center'
  }
})