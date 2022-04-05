import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MyProject() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{'𝐸𝓍𝓅𝓁𝑜𝓇𝑒 𝑀𝓎 𝒫𝓇𝑜𝒿𝑒𝒸𝓉'}</Text>
      <TextInput style={styles.inputTxt} placeholder="User Input" />
      <TextInput
        style={styles.inputTxt}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.UserBtn}
          activeOpacity={0.7}
          onPress={() => alert('Login Succesfully')}>
          <Text style={styles.buttnTxt}>{'Login'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.UserBtn}
          activeOpacity={1}
          onPress={() => alert('SignUp Works')}>
          <Text style={styles.buttnTxt}>{'SignUp'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  heading: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 25,
    // fontStyle:
  },
  inputTxt: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  buttnTxt: {
    fontSize: 18,
    textAlign: 'center',

    width: '90%',
  },
  UserBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%',

    //   flexDirection:"row",
    //   justifyContent:'space-between',
    //   width:'90%'
  },
});
