import React from "react";
import { View } from "react-native";
import ForgetPassword from "./src/Screens/ForgetPassword";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";

function App (){
  return(
    <View >
      {/* <Login /> */}
      <Register />
      {/* <ForgetPassword/> */}
    </View>
  )

}
export default App;