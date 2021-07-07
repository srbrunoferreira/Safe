import { StyleSheet } from 'react-native';

export const theme = {

  color: {
    primary: '#1564bf',
    primaryLight: '#5e91f2',
    primaryDark: '#003b8e',

    secondary: '#01579b',
    secondaryLight: '#4f83cc',
    secondaryDark: '#002f6c',

    primaryText: '#ffffff',
    primaryTextDark: '#1565bf',

    secondaryText: '#ffffff',

    borderLight: '#eceff1'
  }

};

export const globalStyle = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  link: {
    color: theme.color.primary,
    fontWeight: 'bold'
  },

  row: {
    flexDirection: 'row'
  }

});
