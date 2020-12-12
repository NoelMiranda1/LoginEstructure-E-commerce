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
    <View style={{flex: 1, justifyContent: 'center'}}>
      <CustomHeader title="Poducto" />
      <Image style={styles.img} source={{uri: imageUrl}} />
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: '100%',
  },
  name: {
    fontSize: 20,
    padding: 10,
    color: 'orangered',
  },
});

export default Products;
