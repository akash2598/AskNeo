import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
} from 'react-native';

function NotificationCard({item, Read}, ref) {
  const [readStatus, setReadStatus] = useState({
    readStatus: Read,
    backGroundColor: Read ? 'white' : '#d8d8d8',
    readBackGroundColor: Read ? 'transparent' : 'black',
  });
  // const [backGroundColor, setBackGroundColor]= useState(readStatus ?"white":'#d8d8d8');
  // const [readBackGroundColor, setReadBackGroundColor]= useState(readStatus ?"transparent":'black');

  const [value, setValue] = useState(false);
  const changeStatus = () => {
    setValue(true);
    // Alert.alert("Status",item.Name,[{Name:"ok"}])
    // item.backGroundColor="red"
    // setwhiteBackground('white');
    // settransparentBackground('transparent');
  };

  const [whiteBackground, setwhiteBackground] = useState(item.backGroundColor);
  const [transparentBackground, settransparentBackground] = useState(
    item.readBackGroundColor,
  );



  return (
    <TouchableOpacity activeOpacity={1} onPress={changeStatus}>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: {backGroundColor},
          backgroundColor: value ? 'white' : item.backGroundColor,
          padding: 15,
          borderRadius: 10,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <View style={{padding: 10}}>
          <Image
            source={require('../../assets/man.png')}
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{padding: 1, marginLeft: 5, marginRight: 7, maxWidth: 250}}>
          <Text
            style={{
              color: 'black',
            }}>
            {item.Name} . Posted a Blog
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            {item.Title}
          </Text>
          <Text
            style={{
              color: 'grey',
              top: 3,
              fontSize: 12,
            }}>
            {item.Time}
          </Text>
        </View>

        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: value ? 'transparent' : item.readBackGroundColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
      </View>
    </TouchableOpacity>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    // backgroundColor: {backGroundColor},

    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
});
