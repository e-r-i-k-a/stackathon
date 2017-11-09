import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from './public/stylesheet.js'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello world!</Text>
        <TouchableWithoutFeedback
          onPress={()=>{Alert.alert('Congratulations, you tapped a button.')}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click to Start</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
