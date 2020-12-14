import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomHeader from '../src/navigation/CustomHeader';
const Products = ({route}) => {
  const {
    productId,
    categoryId,
    name,
    description,
    price,
    imageUrl,
  } = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader t="Poducto" />
      <View style={styles.images}>
        <Image style={styles.img} source={{uri: imageUrl}} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>
        Precio: <Text style={styles.color}> {price}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 500,
    width: 400,
  },
  name: {
    fontSize: 20,
    padding: 10,
    color: 'orangered',
    fontWeight: 'bold',
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    padding: 10,
  },
  price: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginVertical: 20,
  },
  color: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Products;
