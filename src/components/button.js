import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { theme } from '../theme';

export default function Button({ type = 'solid', title}) {
  return (
    <TouchableOpacity>
      <View style={[
        style.button,
        type === 'solid' ? style.solid : style.outline
      ]}>

        <Text style={[
          style.text,
          type === 'outlined'
            ? { color: theme.color.primary }
            : { color: theme.color.textLight }
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
    fontSize: 16,
    letterSpacing: 1
  }

});
