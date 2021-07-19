import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Paragraph from '../../components/paragraph';
import Button from '../../components/button';

import { globalStyle } from '../../global-styles';
import { style } from './style';

export default SignInScreen = ({navigation}) => {
  return (
    <View style={globalStyle.wrapper}>

      <View>
        <Logo />
        <Paragraph>Seja bem-vindo(a) de volta.</Paragraph>
      </View>

      <View style={[globalStyle.containerOne, style.inputsWrapper]}>
        <View style={style.inputContainer}>
          <Icon style={style.inputIcon} name="person" size={30} color="gray" />
          <TextInput style={style.input} textContentType="username" placeholder="Login" />
        </View>
        <View style={style.inputContainer}>
          <Icon style={style.inputIcon} name="lock" size={30} color="gray" />
          <TextInput style={style.input} textContentType="password" placeholder="Senha" />
        </View>
      </View>

      <View style={globalStyle.row}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('StartScreen') }}>
          <Text style={[style.footerText, globalStyle.link]}>Criar conta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
