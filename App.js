import 'react-native-gesture-handler';
import React,{useEffect} from "react";
import { View } from "react-native";
import StackNavigation from "./src/NavigationRoutes/StackNavigation";
import {NavigationContainer} from '@react-navigation/native';
import ForgetPassword from "./src/Screens/ForgetPassword";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);


function App (){
  useEffect(() => {
   setTimeout(()=>{
    SplashScreen.hide();
   },3000)
  }, [])
//   const onNavigationReady = () => {
//     SplashScreen.hide(); // just hide the splash screen after navigation ready
// }
  return(
    <SafeAreaProvider>
    <NavigationContainer >
      <StackNavigation/>
      </NavigationContainer>
      </SafeAreaProvider>
   
  )

}
export default App;