import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListCategorys = () => {
  const {navigate} = useNavigation();
  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    fetch('http://192.168.0.2:8080/api/categories')
      .then((res) => res.json())
      .then((category) => {
        setCategories(category);
      })
      .catch((erro) => {
        console.error(erro);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  const onPress = (categoryId, name) =>
    navigate('products', {categoryId, name});
  if (isFetching) return <ActivityIndicator size="large" color="red" />;
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => {
        return (
          <View style={{maxHeight: 400}}>
            <TouchableOpacity
              onPress={() => onPress(item.categoryId, item.name)}
              style={styles.btn}>
              <Image style={styles.img} source={{uri: item.imageUrl}} />
              <View style={styles.contenido}>
                <Text style={styles.text}>
                  <Text
                    style={{
                      color: 'orangered',
                    }}>
                    {item.name}
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
      keyExtractor={(item) => item.categoryId.toString()}
      horizontal={true}
    />
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
