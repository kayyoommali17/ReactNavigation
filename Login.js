import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  
  export default function Login({navigation}) {
    const [hidePass, setPass] = useState(true);
    const [email, setEmail] = useState('');
  
    const [emailValidError, setEmailValidError] = useState('');
  
    const handleValidEmail = val => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  
      if (reg.test(val) === true) {
        setEmailValidError('');
      } else if (reg.test(val) === false) {
        setEmailValidError('Please Enter a Valid Email..');
      }
    };
    return (
      <View>
        <ImageBackground
          style={styles.imageback}
          source={require('./src/assests/images/icLoginBg_2022-03-24/icLoginBg.png')}
        />
        <View>
          <Text style={styles.login}>{'Login'}</Text>
  
          <Text style={styles.text}>{'Enter Your details to Continue...'}</Text>
        </View>
        <View style={styles.inputEmail}>
          <Text>{'Email'}</Text>
          <TextInput
            // style={{color:'red'}}
            placeholder="Enter your Email..."
            value={email}
            autoCorrect={false}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View>
        {emailValidError ? (
          <Text style={styles.new}>{emailValidError}</Text>
        ) : null}
        <View style={styles.Password}>
          <Text>{'Password'}</Text>
          <TextInput
            //   style={styles.inputEmail}
            placeholder="Enter Your Password"
            secureTextEntry={hidePass ? true : false}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => {
              setPass(!hidePass);
            }}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={
                hidePass
                  ? require('./src/assests/images/icVisible_2022-03-24/hiddenEye.png')
                  : require('./src/assests/images/icVisible_2022-03-24/icVisible.png')
              }
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.ForgPass}>{'Forgot Password?'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginButton}>{'Login'}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.register}>
            {'Not Registered Yet?'}{' '}
         
              <Text style={styles.Reg} onPress={()=>{navigation.navigate('Register')}} >{'Register'}</Text>
            
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    login: {
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 120,
      marginLeft: 23,
      borderRadius: 20,
    },
    text: {
      color: 'grey',
      marginLeft: 23,
      marginBottom:15
    },
    inputEmail: {
      height: '9%',
      margin: 30,
      borderWidth: 1,
      padding: 14,
      margin: 20,
      borderColor: '#EEEEEE',
      borderWidth: 2,
     
    },
    imageback: {
      height: 200,
      width: 330,
      marginLeft: 100,
      position:'absolute'
    },
    loginButton: {
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: '#F1E1A6',
      textAlign: 'center',
      margin: 23,
      paddingTop: 8,
      height: 50,
      marginTop: 50,
    },
    register: {
      textAlign: 'center',
      marginTop: 50,
    },
    new: {
      marginLeft: 27,
      color: 'red',
      marginBottom:15
    },
    image: {
      height: 25,
      width: 25,
    },
    eye: {
      height: '4%',
      width: '7%',
      marginLeft: 305,
      marginTop: 20,
      // marginBottom: 10,
      position: 'absolute',
    },
    Password: {
      borderColor: '#EEEEEE',
      height: '9%',
      margin: 20,
      borderWidth: 2,
      padding: 14,
      marginTop:1
    },
    ForgPass: {color: 'grey', fontSize: 20, marginLeft: 200, marginTop: 20},
    Reg: {
      fontWeight: 'bold',
      marginTop: 30,
    },
  });
  