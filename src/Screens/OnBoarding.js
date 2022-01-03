import React from "react";
import {View,Text,StyleSheet,Image, Button,Pressable} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const OnBoarding =({navigation})=>{
    return(
        <Onboarding
        onSkip={()=>{navigation.replace('Login')}}
        onDone={()=>{navigation.replace('Login')}}
        DoneButtonComponent={
            ({...props})=>{
                return(<Pressable {...props} >
                    <Text style={{
                        color:"black",
                        marginRight:15
                    }}>Done</Text>
                  </Pressable>)
            }
        }
        pages={[
          {
            backgroundColor: '#Eedc82',
            image: <Image  source={require('../../assets/share.png')}/>,
            title: 'Share & Explore',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#E4d96f',
            image: <Image  source={require('../../assets/community.png')} />,
            title: 'Community',
            subtitle: 'Create and Explore the community based on your interest to share your knowledge',
          },
          {
            backgroundColor: '#F4c430',
            image: <Image style={{height:150,width:200}} source={require('../../assets/findFriends.png')} />,
            title: 'Connect with Friends',
            subtitle: 'Get in touch with your friends and cooeagues anytime anywhere',
          }
      
        ]}
      />
    )
}

export default OnBoarding;