import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function BottomTabHeader({navigation,name}) {
  return (
    <SafeAreaView style={{backgroundColor: '#1b1311'}}>
      <View style={styles.MainContainer}>
        <View style={styles.HomeIcon}>
          <Icon name="bars" color="white" size={20} onPress={()=>{navigation.navigation.openDrawer();}}/>
          <Text style={styles.TextStyle}>
            {name}
          </Text>
        </View>
        <Icon name="search" color="white" size={20} />
      </View>
    </SafeAreaView>
  );
}

export default BottomTabHeader;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#1b1311',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:10
  },
  HomeIcon: {
    flexDirection: 'row',
   
    
  },
  TextStyle:{
    color: 'white', 
    top:-2,
    fontSize: 18,
    marginLeft:20
  }
});
