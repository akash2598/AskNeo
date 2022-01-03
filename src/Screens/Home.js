import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ImageBackground,
  Animated,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreenCard from '../Components/HomeScreenCard';

function Home (){
  
   const sizeOfItem = 120 + 10 * 2 + 25;//
   const Yscroll = React.useRef(new Animated.Value(0)).current;///
 

   const HomeList =[
     {Tilte:"Blog on React Native for the Styled component" ,
      Name:"Akash Singh",
      PostDate:"10/06/2021",
      Time:"7:32 AM"
    },
    {Tilte:"Session on Tensor Flow Architecture" ,
      Name:"Nilesh Chavhan",
      PostDate:"29/05/2021",
      Time:"5:20 PM"
    },
    {Tilte:"Question on How to design curve design in React Native" ,
      Name:"Devashree Patole",
      PostDate:"20/05/2021",
      Time:"1:22 AM"
    },
    {Tilte:"Session on In app chat application using React Native and Firebase" ,
      Name:"Vertika Verma",
      PostDate:"11/05/2021",
      Time:"2:32 AM"
    },
    {Tilte:"Blog on Upcoming Features in React Native" ,
      Name:"Diksha Choudhary",
      PostDate:"20/05/2021",
      Time:"2:20 PM"
    },
    {Tilte:"Blog on React Native for the Styled component" ,
    Name:"Akash Singh",
    PostDate:"10/06/2021",
    Time:"7:32 AM"
  },
  {Tilte:"Session on Tensor Flow Architecture" ,
    Name:"Nilesh Chavhan",
    PostDate:"29/05/2021",
    Time:"5:20 PM"
  },
  {Tilte:"Question on How to design curve design in React Native" ,
    Name:"Devashree Patole",
    PostDate:"20/05/2021",
    Time:"1:22 AM"
  },
  {Tilte:"Session on In app chat application using React Native and Firebase" ,
    Name:"Vertika Verma",
    PostDate:"11/05/2021",
    Time:"2:32 AM"
  },
  {Tilte:"Blog on Upcoming Features in React Native" ,
    Name:"Diksha Choudhary",
    PostDate:"20/05/2021",
    Time:"2:20 PM"
  }
    
   ]

    return(
        <SafeAreaView style={{flex:1 }}>
        <View style={{flex:1 }}>
            {/* <HomeScreenCard/> */}
            <Animated.FlatList
           
            showsVerticalScrollIndicator= {false}
            data={HomeList}
            renderItem={({item , index})=>{
              const scale = Yscroll.interpolate({
                inputRange: [
                  -1, 0,
                  sizeOfItem * index,
                  sizeOfItem * (index+2)
                ],
                outputRange: [1, 1, 1, 0]
              })
              const opacity = Yscroll.interpolate({
                inputRange: [
                  -1, 0,
                  sizeOfItem * index,
                  sizeOfItem * (index+1)
                ],
                outputRange: [1, 1, 1, 0]
              })

              // const translate = Yscroll.interpolate({
              //   inputRange: [
              //     -1, 0,
              //     sizeOfItem * index,
              //     sizeOfItem * (index)+10
              //   ],
              //   outputRange: [0, 0, 50, 100]
              // })

              return(
                <Animated.View  style={{
                  transform:[
                    {scale}
                  ],
                  opacity
                  
                }}
                // style={
                 
                //   [
                    
                //   {
                //     transform: [{ scale } ] 
                //   }
                //   ]
                // }
                >
                 <HomeScreenCard item={item}/>
                </Animated.View>
                // <HomeScreenCard item={item}/>
              )
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
            />
           <View >
             
           <TouchableOpacity 
           style={{
           
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 50,
            backgroundColor: '#f5d005',
            borderRadius: 25,
          }}>
             <Icon name="plus" color="black" size={20}/>
           </TouchableOpacity>
           </View>
        </View>
        </SafeAreaView>
    )
}

export default Home;