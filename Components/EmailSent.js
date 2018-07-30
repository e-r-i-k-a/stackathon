import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
// import {homeIp, schoolIp} from '../server/ip'

export default class EmailSent extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

	// componentDidMount () {
  //   axios.get(homeIp+'/api/game/'+this.props.data.id)
	// 	.then(res => res.data)
	// 	.then(createdGame => {
  //     this.setState({createdGame})
  //   })
  //   .catch((err)=>{console.error('error', err)})
  // }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello from Email Sent Component!</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={()=>{Alert.alert('Congratulations, you pressed a button.')}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Clicky Click</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
