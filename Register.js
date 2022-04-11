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
  
  export default function Register({navigation}) {
    const [hidePassFirst, setPasFirst] = useState(true);
    const [hidePassSecond, setPassSecond] = useState(true);
    const [hidePassThird, setPassThird] = useState(true);
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
  
    const validate = () => {
      if (Password === ConfirmPassword) {
        return true;
      } else {
        return false;
      }
    };
  
    const handleValidEmail = val => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  
      if (reg.test(val) === false) {
        setEmailValidError('Please Enter valid email..');
      } else if (reg.test(val) === true) {
        setEmailValidError('');
      }
    };
  
    return (
      <View style={{flex: 1}}>
        <View style={styles.parent}>
          <ImageBackground
            style={styles.imageback}
            source={require('./src/assests/images/icLoginBg_2022-03-24/icLoginBg.png')}
          />
          <View>
            <Text style={styles.Register}>{'Register'}</Text>
  
            <Text style={styles.text}>{'Enter Your details to Continue...'}</Text>
          </View>
          <View style={styles.inputEmail}>
            <Text>{'Name'}</Text>
            <TextInput
              //style={styles.inputEmail}
              placeholder="Enter your Name..."
            />
          </View>
          <View style={styles.inputEmail}>
            <Text>{'Email'}</Text>
            <TextInput
              //style={styles.inputEmail}
              placeholder="Enter your Email..."
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => {
                setEmail(value);
                handleValidEmail(value);
              }}
            />
          </View>
          {emailValidError ? (
            <Text style={{marginLeft: 23, color: 'red'}}>{emailValidError}</Text>
          ) : null}
          <View style={styles.MainPass}>
            <Text>{'Password'}</Text>
            <TextInput
              //   style={styles.inputEmail}
              placeholder="Enter Your Password"
              secureTextEntry={hidePassFirst ? true : false}
              onChangeText={value => {
                setPassword(value);
              }}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => {
                setPasFirst(!hidePassFirst);
              }}>
              <Image
                style={{height: 20, width: 20}}
                resizeMode="contain"
                source={
                  hidePassFirst
                    ? require('./src/assests/images/icVisible_2022-03-24/hiddenEye.png')
                    : require('./src/assests/images/icVisible_2022-03-24/icVisible.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.MainPass}>
            <Text>{'Confirm Password'}</Text>
            <TextInput
              //   style={styles.inputEmail}
              placeholder="ReEnter Your Password"
              secureTextEntry={hidePassSecond ? true : false}
              onChangeText={value => {
                setConfirmPassword(value);
              }}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => {
                setPassSecond(!hidePassSecond);
              }}>
              <Image
                style={{height: 20, width: 20}}
                resizeMode="contain"
                source={
                  hidePassSecond
                    ? require('./src/assests/images/icVisible_2022-03-24/hiddenEye.png')
                    : require('./src/assests/images/icVisible_2022-03-24/icVisible.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.Check}>
            <TouchableOpacity
              style={styles.tick}
              onPress={() => {
                setPassThird(!hidePassThird);
              }}>
              <Image
                style={{height: 20, width: 20}}
                resizeMode="contain"
                source={
                  hidePassThird
                    ? require('./src/assests/images/icCheck_2022-03-24/icCheck.png')
                    : require('./src/assests/images/icCheck_2022-03-24/BlankCircle.png')
                }
              />
            </TouchableOpacity>
            <Text style={styles.Agree}>
              {'Agree to Terms of Sevices & Privacy Policy'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              x = validate();
              if (x === true) {
                alert('Matched ');
              } else {
                alert('not Matched');
              }
            }}>
            <Text style={styles.RegisterButton}>{'Register'}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.AlreadyTxt}>
              {'Already Have an Account?'}{' '}
              <TouchableOpacity>
                <Text style={styles.Login}>{'Login'}</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    parent: {
      paddingBottom: 2,
      marginBottom: 10,
    },
    Register: {
      fontSize: 50,
      fontWeight: 'bold',
      marginLeft: 23,
      marginBottom: 4,
      marginTop: 100,
    },
    text: {
      color: 'grey',
      marginLeft: 23,
      marginBottom: 20,
    },
    inputEmail: {
      height: '7%',
      borderWidth: 1,
      padding: 10,
      marginLeft: 17,
      marginRight: 17,
      marginBottom: 17,
      borderColor: '#EEEEEE',
      borderWidth: 1,
      paddingBottom: 5,
    },
    imageback: {
      height: 200,
      width: 320,
      position: 'absolute',
      marginLeft: 100,
    },
    RegisterButton: {
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: '#F1E1A6',
      textAlign: 'center',
      margin: 23,
      paddingTop: 8,
      height: 50,
      marginTop: 40,
    },
    AlreadyTxt: {
      textAlign: 'center',
      marginBottom: 20,
    },
    eye: {
      height: '4%',
      width: '5%',
      marginLeft: 325,
      marginTop: 17,
      // marginBottom: 10,
      position: 'absolute',
    },
    MainPass: {
      borderColor: '#EEEEEE',
      height: '7%',
      marginLeft: 17,
      marginRight: 17,
      marginBottom: 17,
      borderWidth: 1,
      padding: 10,
    },
    Check: {
      marginLeft: 20,
      marginTop: 20,
      flexDirection: 'row',
    },
    Agree: {
      color: 'grey',
      fontSize: 15,
      marginLeft: 10,
    },
    Login: {
      fontWeight: 'bold',
      marginTop: 25,
    },
  });
  