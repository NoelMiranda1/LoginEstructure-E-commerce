import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Buttons from '../src/components/Button';
import {useNavigation} from '@react-navigation/native';
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.images}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../src/assets/images/logo.jpg')}
          />
        </View>
      </View>
      <View style={styles.btnsLR}>
        <Text style={styles.titulo}>
          <Text style={{color: 'orangered', fontSize: 35}}>In</Text>
          Shop
        </Text>
        <Text style={styles.desc}>El mejor fucking ecommercer</Text>
        <Text style={styles.join}>Unete gratis</Text>
        <Buttons
          contenido="Iniciar Sesion "
          onPress={() => {
            navigation.navigate('login');
          }}
        />
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('registro');
          }}>
          <Text style={{color: 'blue'}}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    height: '50%',
    width: '100%',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  btnsLR: {
    marginHorizontal: 20,
    paddingLeft: 30,
    marginTop: '-10%',
  },
  images: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  desc: {
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 10,
  },
  join: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;
