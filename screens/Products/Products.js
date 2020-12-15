import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import CustomHeader from '../../src/navigation/CustomHeader';
import {Placeholder, PlaceholderLine, Shine} from 'rn-placeholder';
export const Products = ({route}) => {
  const {categoryId, name} = route.params;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.0.2:8080/api/products/${categoryId}`)
      .then((res) => res.json())
      .then((valor) => {
        setLoading(true);
        setProduct(valor);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Placeholder Animation={Shine}>
          <PlaceholderLine width={50} height={100} color="orangered" />
          <PlaceholderLine width={50} color="orangered" />
        </Placeholder> */}
        <ActivityIndicator size="large" color="orangered" />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader t="Poductos" />
      <Text>Categoria: {name}</Text>
      {product.products.map((valor) => {
        return (
          <View key={valor.productId}>
            <Image
              source={{uri: valor.imageUrl}}
              style={{width: 100, height: 100}}
            />
            <Text>{valor.name}</Text>
            <Text>{valor.price}</Text>
          </View>
        );
      })}
    </View>
  );
};
