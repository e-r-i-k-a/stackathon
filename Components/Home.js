import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import {Actions, Router, Scene} from 'react-native-router-flux'

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello!</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={()=> Actions.Start()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click to Start</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
