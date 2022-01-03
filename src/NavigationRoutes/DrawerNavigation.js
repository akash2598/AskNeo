import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from '../NavigationRoutes/BottomTabNavigation'
import Bookmarks from '../Screens/Bookmarks'
import InterviewQuestions from '../Screens/InterviewQuestions'
import SessionLinks from '../Screens/SessionLinks'
import Memes from '../Screens/Memes'
import Poll from '../Screens/Poll'
import Chat from '../Screens/Chat'
import NeoSoftTeesAroundMe from '../Screens/NeoSoftTeesAroundMe'
import Settings from '../Screens/Settings'
import CustomeDrawer from '../Components/CustomeDrawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={ props => <CustomeDrawer {...props} />}
    initialRouteName="BottomTabHome"
    screenOptions={{
      
      drawerActiveBackgroundColor:"transparent",
      drawerActiveTintColor:"black",
      drawerInactiveTintColor:"black",
      drawerStyle:{
        backgroundColor:"#f5d005",
       // backgroundColor:'transparent',
        borderTopEndRadius:25,
        borderBottomEndRadius:25,
        opacity:1,
        position:"absolute",
        
        
      }
    }}
   
    
    >
      <Drawer.Screen name="BottomTabHome" component={BottomTabNavigation}  options={{
        title:"Home",
        drawerIcon:({color})=>{
          return(
            <Icon name="home" size={19} color={color} style={{
              marginRight:-15
            }} />
          )
        },
        headerShown: false
        
      }} 
      />
      <Drawer.Screen name="Bookmarks" component={Bookmarks} 
      options={{
        drawerIcon:({color})=>{
          return(
            <Icon name="bookmark-o" size={19} color={color} style={{
              marginRight:-15
            }}/>
          )
        },
         headerShown: false,
         
      }}
        />
      <Drawer.Screen name="Interview Questions" component={InterviewQuestions} 
      options={{
        drawerIcon:({color})=>{
          return(
            <Icon name="question-circle-o" size={19} color={color} style={{
              marginRight:-15
            }} />
          )
        },
        headerShown: false
      }}
      />
      <Drawer.Screen name="Session Links" component={SessionLinks} 
      options={{
        drawerIcon:({color})=>{
          return(
            <EIcon name="link" size={19} color={color} style={{
              marginRight:-15
            }}/>
          )
        },
        headerShown: false
      }}/>
      <Drawer.Screen name="Memes" component={Memes}
      options={{
        drawerIcon:({color})=>{
          return(
            <Icon name="smile-o" size={19} color={color} style={{
              marginRight:-15
            }}/>
          )
        },
        headerShown: false
      }} />
      <Drawer.Screen name="Poll" component={Poll}
      options={{
        drawerIcon:({color})=>{
          return(
            <IIcon name="bar-chart" size={19} color={color} style={{
              marginRight:-15
            }}/>
          )
        },
        headerShown: false
      }} />
      <Drawer.Screen name="Chat" component={Chat} 
      options={{
        drawerIcon:({color})=>{
          return(
            <EIcon name="chat" size={19} color={color} style={{
              marginRight:-15
            }}/>
          )
        },
        headerShown: false
      }}/>
      <Drawer.Screen name="NeoSoftTees Around Me" component={NeoSoftTeesAroundMe} 
      options={{
        drawerIcon:({color})=>{
          return(
            <IIcon name="location-sharp" size={19} color={color} style={{
              marginRight:-15
            }}/>
          )
        },
        headerShown: false
      }}/>
      <Drawer.Screen name="Settings" component={Settings}
      options={{
      
        drawerIcon:({color})=>{
          return(
            <IIcon name="md-settings-sharp" size={19} color={color} style={{
              marginRight:-15,
              
            }}/>
          )
        },
        headerShown: false
      }} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
