import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import SharedButton from '../Components/Button';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

function Register() {
  var letters = /^[A-Za-z]+$/;
  const [value, setValue] = useState(true);
  const [confirmPass, setconfirmPass] = useState(true);
  const [error, setError] = useState('');
  //Creating state for each register field.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emaiId, setemaiId] = useState('');
  const [phoneNumber, setphoneNumber] = useState(0);
  const [employeeId, setEmployeeId] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //save all values from user
  const addFirstName = value => {
    setFirstName(value);
  };
  const addLastName = value => {
    setLastName(value);
  };
  const addEmail = value => {
    setemaiId(value);
  };
  const addPhoneNumber = value => {
    setphoneNumber(value);
  };
  const addEmpolyeeId = value => {
    setEmployeeId(value);
  };
  const addPassword = value => {
    setPassword(value);
  };
  const addConfirmPassword = value => {
    setConfirmPassword(value);
  };

  const showPassword = () => {
    setValue(prevState => {
      return prevState ? false : true;
    });
  };
  const showConfirmPassword = () => {
    setconfirmPass(prevState => {
      return prevState ? false : true;
    });
  };

  const registerUser = () => {
    if (checkEmptyDetails() &&validateDetails()) {
    
      Alert.alert(
        'Sign Up',
        `First Name : ${firstName}\nLast Name : ${lastName}Email : ${emaiId}\nPhone Number : ${phoneNumber}\nEmployee Id : ${employeeId}\n
        `,
        [{name: 'Ok', onPress: () => {}}],
      );
    }
  };

  const validateDetails = () => {
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(emaiId)){
          setError("Please Enter valid email address");
          return false;
      }
      else if (password !==confirmPassword){
        setError("Password and Confirm Password doesn't match");
        return false;
      }else{
          return true;
      }
      
  };
  const checkEmptyDetails = () => {
    if(firstName==''){
        setError("First Name cannot be empty.");
        
        return false;
    }
    else if(!letters.test(firstName)){
        setError("Name cannot contains numbers");
        return false
    }else if(lastName==''){
        setError("Last Name cannot be empty.");
        return false
    }else if(!letters.test(lastName)){
        setError("Name cannot contains numbers");
        return false
    }else if(emaiId==''){
        setError("Email ID cannot be empty.");
        return false
    }else if(phoneNumber==0 ){
        setError("Phone number cannot be empty");
        return false;
    }else if(phoneNumber.toString().length != 10 ){
        setError("Phone number must be 10 digit");
        return false;
    }else if(employeeId==0 ){
        setError("Empolyee Id cannot be empty");
        return false;
    }else if(employeeId.toString().length != 4 ){
        setError("Employee Id must be 4 digit");
        return false;
    }else if(password==''){
        setError("Password cannot be empty.");
        return false;
    }else if(confirmPassword==''){
        setError("Confirm Password cannot be empty.");
        return false;
    }
    else{
        
        setError('');
        return true;
    }
    
};

  return (
    <View>
      <ScrollView>
        <Header name="Register" />

        <View style={styles.registerContainer}>
          <View style={styles.nameContainer}>
            {/* First name , last name field*/}
            <View style={{flexGrow: 1}}>
              <Text style={{fontWeight: 'bold'}}>First Name</Text>
              <View style={styles.firstNameInputBox}>
                <TextInput
                  placeholder="Jhon"
                  style={styles.inputFisrtNameText}
                  placeholderTextColor="#C0c0c0"
                  onChangeText={addFirstName}
                />
              </View>
            </View>
            <View style={{marginLeft: 30, flexGrow: 1}}>
              <Text style={{fontWeight: 'bold'}}>Last Name</Text>
              <View style={styles.lastNameInputBox}>
                <TextInput
                  placeholder="Doe"
                  style={styles.inputLastNameText}
                  placeholderTextColor="#C0c0c0"
                  onChangeText={addLastName}
                />
              </View>
            </View>
          </View>
          <View style={styles.registerFieldContainer}>
            {/* Email ,  Phone Number, Password Filed*/}
            {/* Email  */}
            <Text style={{fontWeight: 'bold', marginTop: 35}}>Email Id</Text>
            <View style={styles.lastNameInputBox}>
              <TextInput
                placeholder="xyx@gmail.com"
                placeholderTextColor="#C0c0c0"
                keyboardType="email-address"
                onChangeText={addEmail}
              />
            </View>
            {/* Phone number */}
            <Text style={{fontWeight: 'bold', marginTop: 35}}>
              Phone Number
            </Text>
            <View style={styles.lastNameInputBox}>
              <TextInput
                placeholder="0123456789"
                placeholderTextColor="#C0c0c0"
                keyboardType="phone-pad"
                onChangeText={addPhoneNumber}
              />
            </View>
            {/* Employee Id */}
            <Text style={{fontWeight: 'bold', marginTop: 35}}>Employee Id</Text>
            <View style={styles.lastNameInputBox}>
              <TextInput
                placeholder="0123"
                placeholderTextColor="#C0c0c0"
                keyboardType="numeric"
                maxLength={4}
                onChangeText={addEmpolyeeId}
              />
            </View>
            {/* Password */}
            <Text style={{fontWeight: 'bold', marginTop: 35}}>Password</Text>
            <View style={styles.passwordInput}>
              <TextInput
                placeholder="Enter Password"
                style={styles.inputText}
                placeholderTextColor="#C0c0c0"
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
            {/* Confirm password */}
            <Text style={{fontWeight: 'bold', marginTop: 35}}>
              Confirm Password
            </Text>
            <View style={styles.passwordInput}>
              <TextInput
                placeholder="Re-Enter Password"
                style={styles.inputText}
                placeholderTextColor="#C0c0c0"
                secureTextEntry={confirmPass}
                onChangeText={addConfirmPassword}
              />
              {confirmPass ? (
                <Icon
                  style={styles.icon}
                  name="eye-slash"
                  size={25}
                  onPress={showConfirmPassword}
                />
              ) : (
                <Icon
                  style={styles.icon}
                  name="eye"
                  size={25}
                  onPress={showConfirmPassword}
                />
              )}
            </View>
          </View>
          <Text style={{color: 'red', fontWeight: 'bold'}}>{error}</Text>
          <SharedButton name="Register" loginRegister={registerUser} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
  },
  registerContainer: {
    margin: 30,
  },
  firstNameInputBox: {
    borderBottomWidth: 1,
  },
  lastNameInputBox: {
    borderBottomWidth: 1,
  },
  passwordInput: {
    color: 'white',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,

    alignItems: 'center',
  },
  inputText: {
    flexGrow: 1,
  },
});
export default Register;
