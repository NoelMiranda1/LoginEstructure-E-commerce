import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Iconss from 'react-native-vector-icons/AntDesign';
const Custom = (props) => {
  const navigation = useNavigation();

  return (
    // <View style={styles.contenedor}>
    <View style={styles.contenido}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Iconss name="arrowleft" size={30} />
      </TouchableOpacity>
      {/* <Image
          style={{width: 50, height: 20, marginRight: 10}}
          source={require('../assets/images/logo-wallet.png')}
        /> */}
      <Text style={styles.title}>{props.title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: '20%',
        }}>
        <Text style={styles.t}>{props.t}</Text>
        <Text style={styles.i}>{props.i}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.btn}>
        {/* <Iconss name="menuunfold" size={20} color="#000" /> */}
        <Image
          style={{width: 30, height: 30, marginRight: 10}}
          source={require('../assets/images/icons8-menu-rounded-100.png')}
        />
      </TouchableOpacity>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomColor: '#b0aea9',
    borderWidth: 0.3,
  },
  title: {
    color: '#000',
    fontFamily: 'bold',
    fontSize: 20,
  },
  t: {
    color: 'orangered',
    fontFamily: 'bold',
    fontSize: 20,
  },
  i: {
    color: 'black',
    fontFamily: 'bold',
    fontSize: 20,
  },
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'cover',
  },
});

export default Custom;
