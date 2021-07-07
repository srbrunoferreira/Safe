import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Paragraph from '../../components/paragraph';
import Button from '../../components/button';
import Input from '../../components/input';

import { globalStyle } from '../../global-styles';
import { style } from './style';

export default SignInScreen = ({navigation}) => {
  return (
    <View style={globalStyle.container}>

      <View>
        <Logo />
        <Paragraph>Seja bem-vindo(a) de volta.</Paragraph>
      </View>

      <Input textContentType="username" />

      <View style={globalStyle.row}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('SignUpScreen') }}>
          <Text style={[style.footerText, globalStyle.link]}>Criar conta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
