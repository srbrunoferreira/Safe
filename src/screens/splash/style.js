import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  buttonsContainer: {
    marginTop: 30
  },

  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20
  },

  footerText: {
    fontSize: 16.5
  },

  footerLink: {
    color: theme.color.primary,
    fontWeight: 'bold'
  }

});
