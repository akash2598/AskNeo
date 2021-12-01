import React,{useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import SharedButton from '../Components/Button';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

function ForgetPassword() {
  const [emaiId, setemaiId] = useState('');
  const [error, setError] = useState('');
  const addEmail = value => {
    setemaiId(value);
  };
  const registerUser = () => {
    if (validateDetails()) {
    
      Alert.alert(
        'Sign Up',
        `Email : ${emaiId} `
        ,
        [{name: 'Ok', onPress: () => {}}],
      );
    }
  };
  const validateDetails = () => {
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(emaiId=='' ){
          setError("Email ID cannot be empty.");
          return false;
      }
      else if(!re.test(emaiId)){
        setError("Please Enter valid email address ");
        return false
      }else{
          return true;
      }
      
  };
  return (
    <View>
      <Header name="Forget Password" />
      <View style={styles.forgetContainer}>
        <Icon name="user-circle-o" size={100} color="#F88379" />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 18,
            marginTop: 20,
          }}>
          Enter the email address associated
        </Text>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
          {' '}
          with your account
        </Text>
        <Text style={{color: 'black', fontSize: 16, marginTop: 25}}>
          We will email you a OTP to reset your
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>password</Text>
        <View style={styles.textInputField}>
          <TextInput
            style={{flexGrow: 1, textAlign: 'center'}}
            placeholder="Enter Email Address"
            keyboardType="email-address"
            onChangeText={addEmail}
          />
        </View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>{error}</Text>

        <TouchableOpacity onPress={registerUser}>
          <View style={styles.ButtonBorder}>
            <Text style={styles.ButtonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgetContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  textInputField: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    marginHorizontal: 27,
    marginTop: 30,
  },
  ButtonBorder: {
    backgroundColor: '#Ffdf00',
    marginTop: 40,
    marginHorizontal: 20,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
export default ForgetPassword;
