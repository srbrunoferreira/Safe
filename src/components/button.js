import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { theme } from '../global-styles';

export default function Button({ type = 'solid', title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={[
        style.button,
        type === 'solid' ? style.solid : style.outline
      ]}>

        <Text style={[
          style.text,
          type === 'outlined'
            ? { color: theme.color.primaryTextDark }
            : { color: theme.color.primaryText }
        ]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 100,
    marginBottom: 21,
    borderRadius: 3
  },

  outline: {
    borderWidth: 2,
    borderColor: theme.color.borderLight
  },

  solid: {
    backgroundColor: theme.color.primary
  },

  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1
  }

});
