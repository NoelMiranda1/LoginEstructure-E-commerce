import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/AntDesign';
const Custom = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenido}>
        {/* <Image
          style={{width: 50, height: 20, marginRight: 10}}
          source={require('../assets/images/logo-wallet.png')}
        /> */}
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.t}>{props.t}</Text>
        <Text style={styles.i}>{props.i}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.btn}>
        <Icons name="menu-fold" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: '47%',
    fontFamily: 'bold',
    fontSize: 20,
  },
  btn: {
    alignItems: 'center',
  },
});

export default Custom;
