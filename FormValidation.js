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
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

export default function FormValidation() {
  const [Name, setname] = useState('');
  const [validname, setvalidname] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [add, setadd] = useState([]);
  const [check, setCheck] = useState(true);
  const listViewRef = useRef();
  const [update, setUpdate] = useState(false);
  const [index, setindex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);

  const color = ['#E3FDFD', '#F4EEFF', '#C6CFFF', '#F6E7D8', '#DFDFDE'];
  let i = 0;

  const isValidName = val => {
    // let regixp = /^[a-zA-Z]{1,40}$/;
    let regixp = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
    // let regixp = /^\S/;
    if (val.length == 0) {
      setvalidname('');
      setCheck(true);
    } else if (regixp.test(val) == false || regixp.test(val) == false) {
      setvalidname('name is not valid');
      setCheck(true);
    } else {
      setvalidname(' ');
      setCheck(false);
    }
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.length == 0) {
      setEmailValidError('');
      setCheck(true);
    } else if (reg.test(val) === false) {
      setEmailValidError('Please Enter valid email..');
      setCheck(true);
    } else {
      setEmailValidError('');
      setCheck(false);
    }
  };

  const addDetails = () => {
    // console.log(add);
    if (Name.length > 0 && email.length > 0 && check == false)
      setadd([...add, {Name1: Name, email1: email}]);
    // if (add.length > 0) {listViewRef.current.scrollToEnd()}
    // for (let i = 0; i < add.length; i++) {
    //   if (add[i].email1 === email) {

           
    //   }
    //   // else{

    //   // }
    // }
  };
  const deleteDetails = i => {
    add.splice(i, 1);
    setadd([...add]);
    setUpdate(false);
    setname('');
    setEmail('');
  };

  const editDetails = i => {
    setname(add[i].Name1);
    setEmail(add[i].email1);
    setUpdate(true);
  };

  const onUpdate = () => {
    setUpdate(false);
    add[index].Name1 = Name;
    add[index].email1 = email;
    setname('');
    setEmail('');
    setModalVisible(!modalVisible);
  };
  const onRendder = ({item}) => {
    return (
      <View>
        <View
          style={[styles.list, {backgroundColor: color[i++ % color.length]}]}>
          <Text>{`Name :   ${item.Name1}`}</Text>
          <Text></Text>
          <Text>{`Email  :   ${item.email1}`}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                let i = add.findIndex(ele => ele == item);
                deleteDetails(i);
                //setModalVisible(!modalVisible)
              }}>
              <Image
                style={styles.Icon1}
                source={require('./src/assests/images/CrossImage/trash.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                let i = add.findIndex(i => i == item);
                setindex(i);
                editDetails(i);
                setModalVisible(!modalVisible);
              }}>
              <Image
                style={styles.Icon2}
                source={require('./src/assests/images/CrossImage/edit.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.txt}>{'Form'}</Text>
      <View style={styles.container}>
        <View style={styles.inputName}>
          <Text>{'Name'}</Text>
          <TextInput
            placeholder="Enter your Name..."
            value={Name}
            onChangeText={value => {
              setname(value);
              isValidName(value);
            }}
          />
          <View style={{marginTop: 5, marginLeft: 1}}>
            {validname ? <Text style={{color: 'red'}}>{validname}</Text> : null}
          </View>
        </View>

        <View style={styles.inputEmail}>
          <Text>{'Email'}</Text>
          <TextInput
            placeholder="Enter your Email..."
            value={email}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View>
        <View style={{marginBottom: 10}}>
          {emailValidError ? (
            <Text style={{marginLeft: 23, color: 'red'}}>
              {emailValidError}
            </Text>
          ) : null}
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              update == false ? addDetails() : onUpdate();
              //setModalVisible(true);
            }}
            disabled={check}>
            <Text style={styles.Add1}>
              {update == false ? 'ADD' : 'Update'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Showdetails}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.showtxt}>{'Show Details'}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.Register}>
            <Text style={{fontWeight: 'bold'}}>{'Registered Details'}</Text>
          </View>
          <FlatList
            style={styles.FlatView}
            data={add}
            renderItem={onRendder}
            ref={listViewRef}
          />
          <View style={styles.Backbutton}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.txt2}>{'Go Back'}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,

    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    borderColor: '#95E1D3',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 8,
    marginLeft: 160,
    marginTop: 50,
    // alignItems: 'center',
    //alignContent:'center'
  },
  Add1: {
    fontWeight: 'bold',
    fontSize: 15,
    height: 38,
    paddingTop: 8,
    borderRadius: 20,
    width: 100,

    marginLeft: 64,
    textAlign: 'center',
    marginLeft: 130,
    marginTop: 10,
    borderColor: '#95E1D3',
    backgroundColor: '#95E1D3',
  },
  inputName: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 11,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    paddingBottom: 5,
  },
  inputEmail: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 5,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    paddingBottom: 3,
  },

  Register: {
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 4,
    backgroundColor: '#95E1D3',
    width: 200,
    height: 40,
    marginLeft: 100,
    paddingTop: 10,
    marginTop: 60,

    //fontWeight:20
  },
  list: {
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
    paddingLeft: 15,
    paddingBottom: 2,
    height: 90,
    paddingTop: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.46,

    elevation: 5,
  },
  Icon1: {
    height: 20,
    width: 20,
    bottom: 48,
    left: 275,
    //borderRadius: 50,
  },
  Icon2: {
    height: 20,
    width: 20,
    bottom: 30,
    left: 277,
    //borderRadius: 50,
  },
  FlatView: {
    height: 400,

    borderRadius: 4,

    marginTop: 10,
    borderColor: '#95E1D3',
  },
  email: {
    paddingTop: 10,
  },
  Backbutton: {
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 10,
    borderRadius:7,
    width:100,
    marginLeft:150,
    backgroundColor: '#95E1D3',

    
  },
  txt2: {
    fontWeight: 'bold',
    fontSize: 15,
    
    width: 100,
    height: 30,
    alignSelf: 'center',
    paddingTop: 6,
    paddingLeft: 20,

   
  },
  Showdetails: {
    backgroundColor: '#95E1D3',
    width: 130,
    height: 40,
    alignSelf: 'center',
    paddingTop: 10,
    paddingLeft: 20,
    marginTop: 10,
  },
  showtxt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
