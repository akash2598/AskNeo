import React from "react";
import { View ,Text,StyleSheet} from "react-native";

function Header ({name}){

    return(
        <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{name}</Text>
            </View>
 
        </View>
    )
}

const styles=StyleSheet.create({
    headerContainer:{
         backgroundColor:"#1b1311",
         padding:15,
        
    },
    headerText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16
    }
})
export default Header;