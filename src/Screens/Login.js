import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ImageBackground,
  Image,
  SafeAreaView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SharedButton from '../Components/Button';

import LottieView from 'lottie-react-native';
import {Formik} from 'formik';

import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValidationSchema =yup.object({
  userName:yup.string().required("Please Enter User name"),
  password:yup.string().required("Please enter paswword")
  
})

function Login({navigation}) {
  const [value, setValue] = useState(true);
  const [loader, setLoader] = useState(false);



  // const showAlert = () => {
  //   Alert.alert('Sign In', 'You have Clicked SignIn', [
  //     {name: 'Ok', onPress: () => {}},
  //   ]);
  // };

  const showPassword = () => {
    setValue(prevState => {
      return prevState ? false : true;
    });
  };

  const loginUser = () => {
    if (validateDetails()) {
      // Alert.alert(
      //   'Sign Up',
      //   `Username : ${emaiId}
      //   `,
      //   [{name: 'Ok', onPress: () => {}}],
      // );
      setLoader(true);
     const myVar= setTimeout(() => {
        setLoader(false);
        navigation.navigate('DrawerMainHome');
        
      }, 500);
      
    }
  };


  const openForgetScreen = () => {
    navigation.navigate('Forget Password');
  };
  const openSignUpScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../../assets/BackgroundImage.png')}
      resizeMode="stretch">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View>
          <View style={{height: '100%'}}>
            <ScrollView>
              <View style={styles.Container}>
                <Image
                  source={require('../../assets/FinalLOGO.png')}
                  style={{marginTop: 50, height: 120, width: 120}}
                />
                <View style={styles.loginContainer}>
                  <Text style={styles.textLoginHead}>Proceed with your</Text>
                  <Text style={styles.textLogin}>Login</Text>
                  <Formik
      validationSchema={ValidationSchema}
        initialValues={{
          userName: '',
          password: ''
        }}
        onSubmit={values => {
          setLoader(true);
          values.userName=''
          values.password=''
          const myVar= setTimeout(() => {
             setLoader(false);
             AsyncStorage.setItem("IsLoggedIn",'true');
            // navigation.navigate('DrawerMainHome');
             navigation.replace('DrawerMainHome');
             
           }, 500);
        }}>
          {
            props=>(
              <View style={styles.UsernamePassword}>
              <Text style={styles.usernameText}>Username</Text>
              <View style={styles.UsernameInput}>
                <TextInput
                  placeholder="Enter username"
                  style={styles.inputText}
                  placeholderTextColor="white"
                  onChangeText={props.handleChange('userName')}
                  value={props.values.userName}
                  // onBlur={props.handleBlur('userName')}
                />
                <Icon
                  style={styles.icon}
                  name="user"
                  size={25}
                  color="white"
                />
              </View>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.userName && props.errors.userName}
                  </Text>
              <Text style={styles.passwordText}>Password</Text>
              <View style={styles.passwordInput}>
                <TextInput
                  placeholder="Enter Password"
                  style={styles.inputText}
                  placeholderTextColor="white"
                  secureTextEntry={value}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  // onBlur={props.handleBlur('password')}
                />
                {value ? (
                  <Icon
                    style={styles.icon}
                    name="eye-slash"
                    size={25}
                    color="white"
                    onPress={showPassword}
                  />
                ) : (
                  <Icon
                    style={styles.icon}
                    name="eye"
                    size={25}
                    color="white"
                    onPress={showPassword}
                  />
                )}
                {/* <Icon style={styles.icon} name="eye-slash" size={25}  onPress={showPassword}/> */}
              </View>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.password && props.errors.password}
                  </Text>
                  <SharedButton name="Login" loginRegister={props.handleSubmit} />

            </View>

            )
          }
        </Formik>
                

                  <View style={styles.PasswordACCOUNT}>
                    <Text
                      style={styles.fogetPassword}
                      onPress={openForgetScreen}>
                      Foget Password ?
                    </Text>
                    <Text style={styles.accountCreate}>
                      {' '}
                      Don't have an account?{' '}
                      <Text onPress={openSignUpScreen} style={styles.signup}>
                        {' '}
                        Sign Up
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <View >
              <Modal
                 visible={loader}
                //visible={true}
                transparent={true}
                style={{}}>
                <LottieView
                  source={require('../../assets/Loader/loadingHand.json')}
                  autoPlay
                  loop
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    
                  }}
                />
              </Modal>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 12,
  },
  loginContainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textLoginHead: {
    fontSize: 25,
    color: 'white',
  },
  textLogin: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  usernameText: {
    color: 'white',
  },
  UsernameInput: {
    color: 'white',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    alignItems: 'center',
    paddingBottom: 5,
  },
  inputText: {
    marginRight: 20,
    flexGrow: 1,
  },
  UsernamePassword: {
    marginTop: 70,
  },
  passwordInput: {
    color: 'white',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    alignItems: 'center',
    paddingBottom: 5,
  },
  passwordText: {
    marginTop: 15,
    color: 'white',
  },
  fogetPassword: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  PasswordACCOUNT: {
    alignItems: 'center',
  },
  accountCreate: {
    color: 'white',
    marginTop: 20,
    marginBottom: 50,
  },
  signup: {
    fontWeight: 'bold',
  },
});
export default Login;
