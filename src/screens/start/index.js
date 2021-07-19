import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Logo from '../../components/logo';
import Paragraph from '../../components/paragraph';
import Button from '../../components/button';

import { globalStyle } from '../../global-styles';
import { style } from './style';

export default function StartScreen({ navigation }) {
  return (
    <View style={globalStyle.wrapper}>

      <View>
        <Logo />
        <Paragraph>Seus dados sempre seguros a todo momento.</Paragraph>
      </View>

      <View style={style.buttonsContainer}>
        <Button title="Entrar" onPress={() => { navigation.navigate('SignInScreen') }} />
        <Button title="Registrar-se" type="outlined" onPress={() => { navigation.navigate('SignUpScreen') }} />
      </View>

      <View style={style.footer}>
        <TouchableOpacity>
          <Text style={[style.footerText, globalStyle.link]}>Termos de Uso</Text>
        </TouchableOpacity>

        <Text style={style.footerText}> e </Text>

        <TouchableOpacity>
          <Text style={[style.footerText, globalStyle.link]}>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
