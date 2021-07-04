import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../theme';

export default Paragraph = (props) => {
  return <Text style={styles.text} {...props}/>;
}

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color: theme.color.textDark,
  }

});
