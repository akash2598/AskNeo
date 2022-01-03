import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ImageBackground,
  Image,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationCard from '../Components/NotificationCard';

function Notification() {
  //For scroll animation
  const sizeOfItem = 60 + 10 * 2 + 25; //
  const Yscroll = React.useRef(new Animated.Value(0)).current; ///

  const [NotificationList, setNotificationList] = useState({
    Data: [
      {
        Name: ' Devashree Patole.',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: true,
        Key: 1,
        backGroundColor: 'white',
        readBackGroundColor: 'transparent',
      },
      {
        Name: 'Nilesh Chavan',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 2,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
      {
        Name: 'Vartika Verma',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 3,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
      {
        Name: 'Akash Singh',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 4,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
      {
        Name: 'Diksha Choudhary',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: true,
        Key: 5,
        backGroundColor: 'white',
        readBackGroundColor: 'transparent',
      },
      {
        Name: ' Devashree Patole.',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: true,
        Key: 6,
        backGroundColor: 'white',
        readBackGroundColor: 'transparent',
      },
      {
        Name: 'Nilesh Chavan',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 7,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
      {
        Name: 'Vartika Verma',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 8,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
      {
        Name: 'Akash Singh',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 9,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
      {
        Name: 'Diksha Choudhary',
        Title: 'Announcing React Native 0.62 with Flipper',
        Time: 'Apr 1,2021 at 4:00 pm',
        Read: false,
        Key: 10,
        backGroundColor: '#d8d8d8',
        readBackGroundColor: 'black',
      },
    ],
    Id: 1,
  });

  const changeData = () => {
    setNotificationList({
      Data: [
        {
          Name: ' Devashree Patole.',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: true,
          Key: 1,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Nilesh Chavan',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 2,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Vartika Verma',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 3,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Akash Singh',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 4,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Diksha Choudhary',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: true,
          Key: 5,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: ' Devashree Patole.',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: true,
          Key: 6,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Nilesh Chavan',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 7,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Vartika Verma',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 8,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Akash Singh',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 9,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
        {
          Name: 'Diksha Choudhary',
          Title: 'Announcing React Native 0.62 with Flipper',
          Time: 'Apr 1,2021 at 4:00 pm',
          Read: false,
          Key: 10,
          backGroundColor: 'white',
          readBackGroundColor: 'transparent',
        },
      ],
      Id: 1,
    });
  };

 

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.ReadFilterContainer}>
          <View style={styles.ReadContainer}>
            <TouchableOpacity
              onPress={() => {
                //   childRef.current.sayHi()
                changeData();
              }}>
              <Text style={{color: 'black'}}>Mark All As Read </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.FilterContainer}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="filter"
                  style={{marginRight: 10}}
                  size={20}
                  color="black"
                />
                <Text style={{color: 'black'}}>Filter</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{ padding:15}}>
                 <NotificationCard/>
             </View> */}
        {/* </View> */}
        <View style={{flex: 1, margin: 10}}>
          <Animated.FlatList
            showsVerticalScrollIndicator={false}
            data={NotificationList.Data}
            keyExtractor={(item, index) => item.Key}
            renderItem={({item, index}) => {
              //scale animation value
              const scale = Yscroll.interpolate({
                inputRange: [
                  -1,
                  0,
                  sizeOfItem * index,
                  sizeOfItem * (index + 2),
                ],
                outputRange: [1, 1, 1, 0],
              });
              const opacity = Yscroll.interpolate({
                inputRange: [
                  -1, 0,
                  sizeOfItem * index,
                  sizeOfItem * (index+1)
                ],
                outputRange: [1, 1, 1, 0]
              })
              return (
                <Animated.View
                style={{
                  transform:[
                    {scale}
                ],
                  opacity
                  
                }}>
                  <NotificationCard
                  
                    item={item}
                    Read={item.Read}
                  />
                </Animated.View>
                // <HomeScreenCard item={item}/>
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: Yscroll}}}],
              {useNativeDriver: true},
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Notification;
const styles = StyleSheet.create({
  ReadFilterContainer: {
    flexDirection: 'row',
    height: 50,
  },
  ReadContainer: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  FilterContainer: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
  },
});
