import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import DatePicker from 'react-native-datepicker'
import {homeIp, schoolIp} from '../server/ip'

export default class Start extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gameId: null,
      gameName: '',
      gameDate: '',
      minPlayer: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    if (this.state.gameName && this.state.gameDate && this.state.minPlayer) {
    axios.post(schoolIp+'/api/game', {
      name: this.state.gameName,
      date: this.state.gameDate,
      minPlayer: this.state.minPlayer,
    })
    .then((createdGame) => {
      Alert.alert("Your game has been created!  Let's invite some peeps")
      Actions.EnterPlayers(createdGame)
    })
    } else {
      if (!this.state.gameName) {
        Alert.alert('Please name your game!')
      } else if (!this.state.gameDate) {
        Alert.alert('When is your game?')
      } else if (!this.state.minPlayer) {
        Alert.alert('How many players do you need?')
      }
    }
  }

  render() {
    const newDate = new Date();
    const now = newDate.getFullYear() + '-' + (newDate.getMonth()+1) + '-' + newDate.getDate()

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Create a Game!</Text>
        </View>

<View style={styles.body}>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name: </Text>
          <TextInput
            style={styles.inputText}
            placeholder={this.state.gameName ? this.state.gameName : "Weekly Card Game"}
            placeholderTextColor = "gray"
            onChangeText={(gameName)=> this.setState({gameName})} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date: </Text>
          <DatePicker
            style={{width: 200}}
            mode="datetime"
            placeholder={this.state.gameDate ? this.state.gameDate : "Next Friday Night"}
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
          <Text style={styles.inputLabel}>Minimum Players: </Text>
          <TextInput
            style={styles.inputText}
            placeholder='We need at least 4 players'
            placeholderTextColor = "gray"
            keyboardType = 'numeric'
            returnKeyType='done'
            onChangeText={(minPlayer)=> this.setState({minPlayer})} />
        </View>

</View>

        <TouchableWithoutFeedback
          onPress={this.handleSubmit} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}
