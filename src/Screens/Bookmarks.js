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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Components/Header';

function Bookmarks (){
    return(
        <SafeAreaView style={{backgroundColor:"#1b1311", flex:1}} >
            <Header name="BookMark"/>
              <View style={{backgroundColor:"pink" , flex:1}}>
                  <Text>Hi</Text>
              </View>
        </SafeAreaView>
        
       
    )
}

export default Bookmarks;