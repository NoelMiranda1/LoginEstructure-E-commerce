import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ListProducts} from '../src/components/ListProducts';
import {ListCategorys} from '../src/components/ListCategorys';
import {
  Placeholder,
  PlaceholderLine,
  Shine,
  PlaceholderMedia,
} from 'rn-placeholder';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCat, setloadingCat] = useState(true);
  ////////////////////
  useEffect(() => {
    fetch('http://192.168.0.2:8080/api/products/1')
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
        console.log('Productos', product);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  ////////////////////////

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={styles.section}>Categorias</Text>
      <View>
        <ListCategorys />
      </View>
      <Text style={styles.section}>Camisas</Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={products.products}
          renderItem={({item}) => {
            return <ListProducts item={item} />;
          }}
          keyExtractor={(item) => item.productId.toString()}
          horizontal={true}
        />
      </View>
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

export default Home;
