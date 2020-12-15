import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Drawer from './Drawer';
import Product from '../../screens/Product';
import {Products} from '../../screens/Products/Products';
const StackDrawe = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="drawer"
          component={Drawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="product"
          component={Product}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="products"
          component={Products}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackDrawe;
