import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../src/navigation/CustomHeader';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://192.168.0.2:8080/api/products/1')
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
        console.log('Productos', product);
      });
  }, []);

  const renderItem = ({item}) => {
    const {productId, categoryId, name, description, price, imageUrl} = item;
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
            <Text style={styles.text}>
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
              Precio:{' '}
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

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader t="In" i="Shop" />
      <Text style={styles.section}>Camisas</Text>
      <FlatList
        data={products.products}
        renderItem={renderItem}
        keyExtractor={(item) => item.productId}
        horizontal={true}
      />
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
    backgroundColor: 'red',
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

export default Home;
