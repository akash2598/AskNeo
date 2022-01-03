import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

const HomeScreenCard = ({item}) => {
  
  let month =moment(item.PostDate,'DD/MM/YYYY').format('MMM');
  let date =moment(item.PostDate,'DD/MM/YYYY').format('DD');
  let year =moment(item.PostDate,'DD/MM/YYYY').format('YYYY');
  
  
 
  return (
    <View style={styles.MainContainer}>
      <View style={styles.DateBlogContainer}>
       <View>
       <View style={styles.DateConatiner}>
          <Text style={{color: 'black'}}>{month}</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{date}</Text>
          <Text style={{color: 'black'}}>{year}</Text>
        </View>
       </View>
        <View style={styles.BlogCotainer}>
          <View style={styles.BlogTimeContainer}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item.Tilte}
          </Text>
          <View style={styles.ClockTimeContainer}>
          <Icon name="clock-o" size={14} />
          <Text style={{marginLeft:10}}>{item.Time}</Text>
          </View>
          </View>
        </View>
      </View>
      <View style={styles.NameArrowContainer}>
        <View style={styles.ImageNameContainer}>
          <Image
            source={require('../../assets/man.png')}
            style={{
              height: 38,
              width: 38,
              borderRadius: 19,
              marginRight: 10,
            }}
          />
          <Text style={{fontWeight: 'bold', color: 'black'}}>{item.Name}</Text>
        </View>
        <View style={{
            height:40,
            width:40,
            borderRadius:20,
            backgroundColor:"#1b1311",
            justifyContent:"center",
            alignItems:"center"
        }}>
          <TouchableOpacity>
             <Icon name="long-arrow-right" color="white" size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreenCard;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 12,
    // paddingHorizontal:10,
    // marginHorizontal:10
  },
  DateBlogContainer: {
    flexDirection: 'row',
    marginBottom:10
  },
  DateConatiner: {
    backgroundColor: '#f5d005',
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BlogCotainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginRight: 10,
    padding: 12,
    width: 301,
    height:"115%",
   borderTopRightRadius:15,
   borderTopLeftRadius:15

  },
  NameArrowContainer: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    width: 363,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    borderTopLeftRadius:15
    
    
  },
  ImageNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BlogTimeContainer:{
      
  },
  ClockTimeContainer:{
      flexDirection:"row",
      alignItems:"center",
      padding:2
  }
});

