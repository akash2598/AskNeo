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
function NeoSoftTeesAroundMe (){
    return(
        <SafeAreaView style={{backgroundColor:"#1b1311", flex:1}} >
        <Header name="NeoSofTees Around Me"/>
          <View style={{backgroundColor:"pink" , flex:1}}>
              <Text>Hi</Text>
          </View>
    </SafeAreaView>
    )
}

export default NeoSoftTeesAroundMe;