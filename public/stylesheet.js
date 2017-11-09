import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    //fill all available space, shared evenly amongst each other component with the same parent.
    //The larger the flex, the higher the ratio of space a component will take compared to its siblings.
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
