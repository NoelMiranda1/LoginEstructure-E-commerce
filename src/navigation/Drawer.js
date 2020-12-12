import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerConten from './CustomDrawe';
/// Importacion de las screens
import Home from '../../screens/Home';
import Products from '../../screens/Products';
const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{width: '60%'}}
      initialRouteName="home"
      drawerContent={(props) => <CustomDrawerConten {...props} />}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="product" component={Products} />
    </Drawer.Navigator>
  );
};

export default Drawer;
