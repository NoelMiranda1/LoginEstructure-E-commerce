import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, ActivityIndicator} from 'react-native';

//Importaciones para la navegacions
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//importaciones de las screens
import Drawer from './src/navigation/StackDrawe';
import Auth from './src/navigation/StackAuth';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          setToken(value);
        } else {
          setToken(null);
        }
      } catch (e) {
        setToken(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) return <ActivityIndicator size="large" color="#000" />;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={token ? 'app' : 'auth'}>
          <Stack.Screen
            name="auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="app"
            component={Drawer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
