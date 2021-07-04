import React from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

import { theme } from '../theme';

const logoImg = require('../assets/logo.png');

export default Logo = () => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={logoImg} />
      <Text style={style.title}>Safe</Text>
    </View>
  );
}

const style = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 110,
    height: 110
  },

  title: {
    fontSize: 32,
    marginTop: 6,
    marginBottom: 16,
    color: theme.color.primary,
    fontWeight: 'bold',
    letterSpacing: -1
  }

});
