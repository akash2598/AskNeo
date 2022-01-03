import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Blog from '../Screens/Blog';
import Questions from '../Screens/Questions';
import Community from '../Screens/Community';
import Notification from '../Screens/Notification';
import Icon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import FRIcon from 'react-native-vector-icons/FontAwesome5';
import {Text, View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBlog, faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';

import BottomTabHeader from '../Components/BottomTabHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function BottomTabNavigation({navigation}) {
  let Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
         height:"11%",
         overflow:"hidden"
        
        },
        tabBarActiveTintColor: '#f5d005',
       
       
      }}>
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarShowLabel: false,
          header: () => {
            return <BottomTabHeader name="Blog" navigation={{navigation}} />;
          },
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faBlog} color={color} size={23} />;
          },
          tabBarItemStyle: {
            backgroundColor: '#1b1311',
            borderTopLeftRadius: 15,
           
            
          },
          tabBarIconStyle:{
          
              marginBottom:12
       
          }
        }}
      />
      <Tab.Screen
        name="Questions"
        component={Questions}
        options={{
          header: () => {
            return (
              <BottomTabHeader name="Questions" navigation={{navigation}} />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
            return (
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                color={color}
                size={23}
              />
            );
          },
          tabBarItemStyle: {
            backgroundColor: '#1b1311',
            borderTopRightRadius: 20,
          },
          tabBarIconStyle:{
          
            marginBottom:12
     
        }
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {
            return <BottomTabHeader name="Home" navigation={{navigation}} />;
          },
          tabBarItemStyle: {
            backgroundColor: '#1b1311',
            overflow:"hidden",
           // marginTop:2,
            paddingBottom:5
            // borderBottomLeftRadius:15,
            // borderBottomRightRadius:15,
          },
          tabBarIconStyle:{
          
            marginTop:10
     
        },
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
            // return <Icon name="home" />;
            return (
              <View
                style={{
                  alignSelf: 'center',
                 backgroundColor:"white",
                 width:"100%",
                 marginBottom:22,
                 overflow:"hidden",
                   padding: 6,
                 // paddingTop:10,
                 // paddingBottom:3,
                  //  paddingHorizontal: 5,
                   borderBottomLeftRadius: 40,
                   borderBottomRightRadius: 40,

                  alignItems: 'center',
                  justifyContent: "space-between",
               // marginTop:1.5
                }}>
                <View
                  style={{
                    backgroundColor: '#1b1311',
                    height: 40,
                    width: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom:2,
                    marginTop:7
                  
                  }}>
                  <Icon name="home" size={23} color={color} style={{}} />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          header: () => {
            return (
              <BottomTabHeader name="Community" navigation={{navigation}} />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
            return <Icon size={23} name="users" color={color} />;
          },
          tabBarItemStyle: {
            backgroundColor: '#1b1311',
            borderTopLeftRadius: 20,
          },
          tabBarIconStyle:{
          
            marginBottom:12
     
        }
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          header: () => {
            return (
              <BottomTabHeader name="Notification" navigation={{navigation}} />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
            return <Icon size={23} name="bell-o" color={color} />;
          },
          tabBarItemStyle: {
            backgroundColor: '#1b1311',
            borderTopRightRadius: 15,
          },
          tabBarIconStyle:{
          
            marginBottom:12
     
        }
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;
