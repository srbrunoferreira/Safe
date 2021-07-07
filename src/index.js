import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screens/start';
import SignInScreen from './screens/signin';
import SignUpScreen from './screens/signup';
import HomeScreen from './screens/home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default App = () => {
  let isSignedIn = false;

  return (
    <NavigationContainer>

      {
        isSignedIn ? (

          <Drawer.Navigator initialRouteName="HomeScreen">

            <Drawer.Screen name="HomeScreen" component={HomeScreen} />

          </Drawer.Navigator>

          ) : (

          <Stack.Navigator initialRouteName="SignInScreen" headerMode="none">

            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

          </Stack.Navigator>

          )
      }

    </NavigationContainer>
  );
}
