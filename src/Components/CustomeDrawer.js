import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import EIcon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CustomeDrawer(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1 , backgroundColor: "transparent"}}>
        {/* <Image source={require('../../assets/myMonkey.gif')}/> */}
        <View style={styles.profileView}>
          <Image
            style={styles.profileImg}
            source={require('../../assets/man.png')}
          />
          <View style={styles.profileName}>
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 10}}>
              Akash Yadav
            </Text>
            <EIcon name="chevron-right" size={20} color="black" />
          </View>
        </View>
     
        {/* <ImageBackground source={require('../../assets/myMonkey.gif')} style={{flex:1 , opacity:0.5 , zIndex:-1}}> */}
          <DrawerContentScrollView {...props}>
              <View style={{ position:"absolute" ,left:'-25%', opacity:0.3}}>
                  <Image source={require('../../assets/myMonkey.gif')}/>
              </View>
            <View>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
        {/* </ImageBackground> */}
        <TouchableOpacity onPress={()=>{
            AsyncStorage.removeItem("IsLoggedIn");
           // AsyncStorage.setItem("IsLoggedIn",'false');
          props.navigation.navigate("Login")
        }}>
          <View style={styles.logOut}>
            <EIcon
              name="log-out"
              size={19}
              color="black"
              style={{
                marginRight: 15,
              }}
            />
            <Text style={{color: 'black'}}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileView: {
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
    borderBottomColor: 'grey',
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 15,
    marginLeft: 15,
  },
  profileName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  logOut: {
    flexDirection: 'row',
    marginLeft: 20,
    bottom: 10,
  },
});
export default CustomeDrawer;
