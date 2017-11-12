import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import DatePicker from 'react-native-datepicker'
import {homeIp, schoolIp} from '../server/ip'
import { List, ListItem } from "react-native-elements"


export default class Start extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gameName: '',
      // gameType: '',
      gameDate: '',
      minPlayer: 1,
      // maxPlayer: null,
      // confirmationDate: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    axios.post(homeIp+'/api/game', {
      name: this.state.gameName,
      date: this.state.gameDate,
      minPlayer: this.state.minPlayer,
      // maxPlayer: this.state.maxPlayer
    })
    .then(() => {
      Alert.alert('Your game has been created!')
    })
    .then(() => {
      Actions.EnterPlayers()
    })
  }

  render() {
    const newDate = new Date();
    const now = newDate.getFullYear() + '-' + (newDate.getMonth()+1) + '-' + newDate.getDate()
    // const numbers = () => {
    //   let data = [];
    //   for (let i=0; i<100; i++) {
    //     data.push(i)
    //   }
    //   return data
    // }
    const numbers = [1,2,3,4,5]

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello from Start Component!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name: </Text>
          <TextInput
            style={styles.inputText}
            placeholder='Team or event name'
            placeholderTextColor = "gray"
            onChangeText={(gameName)=> this.setState({gameName})} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date: </Text>
          <DatePicker
            style={{width: 200}}
            mode="datetime"
            placeholder={this.state.gameDate ? this.state.gameDate : "Game Date"}
            format="YYYY-MM-DD hh:mm"
            minDate={now}
            confirmBtnText="Select"
            cancelBtnText="Back"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                height: 40,
                borderColor: 'gray',
                backgroundColor: 'white',
              },
              placeholderText: {
                color: 'gray',
                fontSize: 15
              }
            }}
            onDateChange={(gameDate) => {this.setState({gameDate})}}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Minimum: </Text>
          <TextInput
            style={styles.inputText}
            placeholder='Minimum amount of friends needed to play'
            placeholderTextColor = "gray"
            keyboardType = 'numeric'
            returnKeyType='done'
            onChangeText={(minPlayer)=> this.setState({minPlayer})} />
        </View>


        <TouchableWithoutFeedback
          onPress={this.handleSubmit} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={()=> Actions.Test()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click to Continue</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}
