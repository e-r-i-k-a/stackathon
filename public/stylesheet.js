import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    //fill all available space, shared evenly amongst each other component with the same parent.
    //The larger the flex, the higher the ratio of space a component will take compared to its siblings.
    backgroundColor: '#FFBAC6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#A32C41',
    borderRadius: 50
  },
  buttonText: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white'
  }
});
