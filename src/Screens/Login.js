import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SharedButton from '../Components/Button';
function Login() {
  const [value, setValue] = useState(true);
  const [error, setError] = useState('');
  const [emaiId, setemaiId] = useState('');
  const [password, setPassword] = useState('');

  const addEmail = value => {
    setemaiId(value);
  };
  const addPassword = value => {
    setPassword(value);
  };

  const showAlert = () => {
    Alert.alert('Sign In', 'You have Clicked SignIn', [
      {name: 'Ok', onPress: () => {}},
    ]);
  };

  const showPassword = () => {
    setValue(prevState => {
      return prevState ? false : true;
    });
  };

  const loginUser=()=>{
    if (validateDetails()) {
    
      Alert.alert(
        'Sign Up',
        `Username : ${emaiId}
        `,
        [{name: 'Ok', onPress: () => {}}],
      );
    }
  };
  const validateDetails = () => {
    if(emaiId==''){
      setError("Username cannot be empty.");
      return false
  }else if(password==''){
    setError("Password cannot be empty.");
    return false;
} else{
        
  setError('');
  return true;
}
      
  };

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.loginContainer}>
          <Text style={styles.textLoginHead}>Proceed with your</Text>
          <Text style={styles.textLogin}>Login</Text>
          <View style={styles.UsernamePassword}>
            <Text style={styles.usernameText}>Username</Text>
            <View style={styles.UsernameInput}>
              <TextInput
                placeholder="Enter username"
                style={styles.inputText}
                placeholderTextColor="white"
                onChangeText={addEmail}
              />
              <Icon style={styles.icon} name="user" size={25} />
            </View>
            <Text style={styles.passwordText}>Password</Text>
            <View style={styles.passwordInput}>
              <TextInput
                placeholder="Enter Password"
                style={styles.inputText}
                placeholderTextColor="white"
                secureTextEntry={value}
                onChangeText={addPassword}
              />
              {value ? (
                <Icon
                  style={styles.icon}
                  name="eye-slash"
                  size={25}
                  onPress={showPassword}
                />
              ) : (
                <Icon
                  style={styles.icon}
                  name="eye"
                  size={25}
                  onPress={showPassword}
                />
              )}
              {/* <Icon style={styles.icon} name="eye-slash" size={25}  onPress={showPassword}/> */}
            </View>
          </View>
          <Text style={{color: 'red', fontWeight: 'bold'}}>{error}</Text>

          <SharedButton name="Login" loginRegister={loginUser}/>
          <View style={styles.PasswordACCOUNT}>
            <Text style={styles.fogetPassword}>Foget Password ?</Text>
            <Text style={styles.accountCreate}>
              {' '}
              Don't have an account?{' '}
              <Text onPress={showAlert} style={styles.signup}>
                {' '}
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#C0c0c0',
    padding: 12,
    flex: 1,
  },
  loginContainer: {
    marginTop: 200,
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
