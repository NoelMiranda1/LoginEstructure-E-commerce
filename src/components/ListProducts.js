import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListProducts = ({item}) => {
  const {productId, categoryId, name, description, price, imageUrl} = item;
  const navigation = useNavigation();
  console.log('EL ITEM ->', item);
  return (
    <View style={{maxHeight: 400}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('product', {
            productId,
            categoryId,
            name,
            description,
            price,
            imageUrl,
          });
        }}
        style={styles.btn}>
        <Image style={styles.img} source={{uri: imageUrl}} />
        <View style={styles.contenido}>
          <Text style={styles.text} numberOfLines={2}>
            Producto:{' '}
            <Text
              numberOfLines={2}
              style={{
                color: 'orangered',
              }}>
              {name}
            </Text>
          </Text>
          <Text>
            Precio :{' '}
            <Text
              style={{
                color: 'red',
                borderStyle: 'solid',
              }}>
              {item.price}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    height: 400,
    width: 230,
  },
  img: {
    marginBottom: 40,
    width: 200,
    height: 250,
    borderRadius: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  contenido: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
  },
  section: {
    color: 'orangered',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
