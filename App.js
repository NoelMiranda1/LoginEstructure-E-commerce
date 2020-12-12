import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, ActivityIndicator} from 'react-native';

//Importaciones para la navegacions
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//importaciones de las screens
import Welcome from './screens/Welcome';
import Login from './screens/auth/Login';
import Drawer from './src/navigation/Drawer';
import AsyncStorage from '@react-native-community/async-storage';
import Rergister from './screens/auth/Rergister';

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
        <Stack.Navigator
          initialRouteName={token ? 'drawer' : 'welcome'}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4ac3f7',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
          }}>
          <>
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
          </>
          <Stack.Screen
            name="drawer"
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
