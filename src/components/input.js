import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default Input = ({ textContentType }) => {
  return (
    <TextInput
      accessibilityRole="text"
      textContentType={textContentType}
    />
  );
}

const styles = StyleSheet.create({
  input: {}
});
