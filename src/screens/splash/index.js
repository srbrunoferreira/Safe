import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Logo from '../../components/logo';
import Paragraph from '../../components/paragraph';
import Button from '../../components/button';

import { style } from './style';

export default function StartScreen() {
  return (
    <View style={style.container}>

      <View>
        <Logo />
        <Paragraph>Seus dados sempre seguros a todo momento.</Paragraph>
      </View>

      <View style={style.buttonsContainer}>
        <Button type="solid" title="Entrar" />
        <Button type="outlined" title="Registrar-se" />
      </View>

      <View style={style.footer}>
        <TouchableOpacity>
          <Text style={[style.footerText, style.footerLink]}>Termos de Uso</Text>
        </TouchableOpacity>

        <Text style={style.footerText}> e </Text>

        <TouchableOpacity>
          <Text style={[style.footerText, style.footerLink]}>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
