import { StyleSheet } from 'react-native'

import { theme } from '../../global-styles'

export const style = StyleSheet.create({

  inputsWrapper: {
    alignItems: 'center',
    marginVertical: 25
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: 'gray',
    width: '95%',
    marginBottom: 15
  },

  inputIcon: {
    width: '15%',
    textAlign: 'center'
  },

  input: {
    width: '85%',
    padding: 0,
    height: 58,
    paddingLeft: 20,
    fontSize: 18,
    borderStyle: 'solid',
    borderLeftWidth: 0.3,
    borderLeftColor: 'gray'
  }

})
