import React,{useEffect,useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import ForgetPassword from '../Screens/ForgetPassword';
import DrawerNavigation from './DrawerNavigation';
import OnBoarding from '../Screens/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View ,Text,ActivityIndicator,Image} from 'react-native';


const Stack = createNativeStackNavigator();

function StackNavigation() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let initalRoute;
  //let status;
  const [status,setStatus]=useState();
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
     AsyncStorage.getItem('IsLoggedIn').then((val)=>{
       if(val==null){
       
         setStatus(false)
       }
       else{
        
         setStatus(true)
       }
     });
    
  }, []);
  if (isFirstLaunch === null) {
    return null
    //return (<View><Image source={require('../../assets/myMonkey.gif')}/></View>); // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    initalRoute = 'OnBoard';
  } else {
    
    if(status===undefined) 
    return null
    //return (<View><Image source={require('../../assets/myMonkey.gif')}/></View>);
    else if(status==true)
     initalRoute="DrawerMainHome"
     else
    initalRoute ="Login"
  }
  
    return (
      <Stack.Navigator initialRouteName={initalRoute}>
          <Stack.Screen
          name="OnBoard"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerMainHome"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: '#1a1110',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Forget Password"
          component={ForgetPassword}
          options={{
            headerStyle: {
              backgroundColor: '#1a1110',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    
  )


  
}
export default StackNavigation;

