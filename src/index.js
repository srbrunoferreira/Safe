import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StartScreen from './screens/splash';
import HomeScreen from './screens/home';

const Drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="StartScreen">

        <Drawer.Screen name="StartScreen" component={StartScreen} />
        <Drawer.Screen name="Login" component={HomeScreen} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}
