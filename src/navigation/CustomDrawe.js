import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
const CustomDrawer = ({props, progress, ...rest}) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image /> */}
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopColor: '#000', borderTopWidth: 1, marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: '#ffa822',
                padding: 5,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopColor: '#000', borderTopWidth: 1, marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('');
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: '#ffa822',
                padding: 5,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Perfil
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopColor: '#000', borderTopWidth: 1, marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: 'Confirm',
                    onPress: () => {
                      AsyncStorage.clear();
                      navigation.replace('login');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: '#ffa822',
                padding: 5,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Cerrar sesion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
