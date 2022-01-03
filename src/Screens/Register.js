import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import SharedButton from '../Components/Button';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';

import * as yup from 'yup'

const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

const emplyoeeId =RegExp(
  /^\(?([0-9]{4})$/
);
//yup schema
const ValidationSchema =yup.object({
  firstName:yup.string().min(2,"must be greater than 2").required("First name Required"),
  lastName:yup.string().min(2).required("Last name Required"),
  emailId:yup.string().email().required("Email id required."),
  phoneNumber:yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required"),
 // employeeId:yup.number().max(4).min(4).required(),
  employeeId:yup.string().matches(emplyoeeId,'Must be 4 digit').required(),
  password: yup
    .string()
    .required('Required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  confirmPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')


  
})

function Register() {
  const [value, setValue] = useState(true);
  const [confirmPass, setconfirmPass] = useState(true);

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

  return (
    <SafeAreaView>
      <Formik
      validationSchema={ValidationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          emailId: '',
          phoneNumber: '',
          employeeId: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => {
          
        }}>
        {props => (
          <View>
            {/* <Header name="Register" /> */}
            <View style={{height: '100%'}}>
              <ScrollView>
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
                           onChangeText={props.handleChange('firstName')}
                           value={props.values.firstName}
                           onBlur={props.handleBlur('firstName')}
                        />
                       
                      </View>
                      <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.firstName && props.errors.firstName}
                  </Text>
                    </View>
                    <View style={{marginLeft: 30, flexGrow: 1}}>
                      <Text style={{fontWeight: 'bold'}}>Last Name</Text>
                      <View style={styles.lastNameInputBox}>
                        <TextInput
                          placeholder="Doe"
                          style={styles.inputLastNameText}
                          placeholderTextColor="#C0c0c0"
                          onChangeText={props.handleChange('lastName')}
                          value={props.values.lastName}
                          onBlur={props.handleBlur('lastName')}
                        />
                         
                      </View>
                      <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.lastName && props.errors.lastName}
                  </Text>
                    </View>
                  </View>
                  <View style={styles.registerFieldContainer}>
                    {/* Email ,  Phone Number, Password Filed*/}
                    {/* Email  */}
                    <Text style={{fontWeight: 'bold', marginTop: 35}}>
                      Email Id
                    </Text>
                    <View style={styles.lastNameInputBox}>
                      <TextInput
                        placeholder="xyx@gmail.com"
                        placeholderTextColor="#C0c0c0"
                        keyboardType="email-address"
                        onChangeText={props.handleChange('emailId')}
                        value={props.values.emailId}
                      />
                       
                    </View>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.emailId && props.errors.emailId}
                  </Text>
                    {/* Phone number */}
                    <Text style={{fontWeight: 'bold', marginTop: 35}}>
                      Phone Number
                    </Text>
                    <View style={styles.lastNameInputBox}>
                      <TextInput
                        placeholder="0123456789"
                        placeholderTextColor="#C0c0c0"
                        keyboardType="phone-pad"
                        onChangeText={props.handleChange('phoneNumber')}
                        value={props.values.phoneNumber}
                      />
                      
                    </View>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.phoneNumber && props.errors.phoneNumber}
                  </Text>
                    {/* Employee Id */}
                    <Text style={{fontWeight: 'bold', marginTop: 35}}>
                      Employee Id
                    </Text>
                    <View style={styles.lastNameInputBox}>
                      <TextInput
                        placeholder="0123"
                        placeholderTextColor="#C0c0c0"
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={props.handleChange('employeeId')}
                        value={props.values.employeeId}
                      />
                       
                    </View>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.employeeId && props.errors.employeeId}
                  </Text>
                    {/* Password */}
                    <Text style={{fontWeight: 'bold', marginTop: 35}}>
                      Password
                    </Text>
                    <View style={styles.passwordInput}>
                      <TextInput
                        placeholder="Enter Password"
                        style={styles.inputText}
                        placeholderTextColor="#C0c0c0"
                        secureTextEntry={value}
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}
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
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.password && props.errors.password}
                  </Text>
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
                        onChangeText={props.handleChange('confirmPassword')}
                        value={props.values.confirmPassword}
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
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {props.touched.confirmPassword && props.errors.confirmPassword}
                  </Text>
                  </View>
                  <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {/* {error} */}
                  </Text>
                  <SharedButton name="Register" loginRegister={props.handleSubmit} />
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
  },
  registerContainer: {
    margin: 30,
    //  paddingBottom:150
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
