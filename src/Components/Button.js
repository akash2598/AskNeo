import React  from "react";
import { View,Text,StyleSheet,TouchableOpacity,Alert } from "react-native";

function SharedButton ({name,loginRegister}){

    // const showAlert=()=>{
    //     Alert.alert("Sign In","You have Clicked Sign In",[
    //         {name:"Ok",onPress:()=>{}}
    //     ])
    // }
    return(
        <TouchableOpacity onPress={loginRegister}>
            <View style={styles.ButtonBorder}>
                <Text style={styles.ButtonText}>
                   {name}
                </Text>
            </View>
        </TouchableOpacity>
    )

}
const styles =StyleSheet.create({
    ButtonBorder:{
        backgroundColor:"#Ffdf00",
        marginTop:40,
        marginHorizontal:20,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
        
    },
    ButtonText:{
           fontWeight:"bold",
           fontSize:20
    }
})

export default SharedButton;