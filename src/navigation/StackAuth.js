import React from 'react';
import Login from '../../screens/auth/Login';
import Rergister from '../../screens/auth/Rergister';
import Welcome from '../../screens/Welcome';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const StackDrawe = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="registro"
          component={Rergister}
          options={{title: 'Registro'}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackDrawe;
