import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerConten from './CustomDrawe';
/// Importacion de las screens
import Home from '../../screens/Home';
const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{width: '60%'}}
      initialRouteName="home"
      drawerContent={(props) => <CustomDrawerConten {...props} />}>
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={{color: 'orangered', fontSize: 20}}>
              In<Text style={{color: '#000', fontSize: 18}}>Shop</Text>
            </Text>
          ),

          headerTitleStyle: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'red',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;
