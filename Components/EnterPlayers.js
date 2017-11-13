import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, schoolIp} from '../server/ip'
import Team from './Team'

export default class EnterPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      createdGame: {},
      playerEmail: '',
      playerArr: []
    },
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.viewTeam = this.viewTeam.bind(this)
  }

	componentDidMount () {
    axios.get(homeIp+'/api/game/'+this.props.data.id)
		.then(res => res.data)
		.then(createdGame => {
      this.setState({createdGame})
    })
    .catch((err)=>{console.error('error', err)})
  }

  handleChange(playerEmail) {
    this.setState({playerEmail})
  }

  handleSubmit(event){
    axios.post(homeIp+'/api/player/'+this.props.data.id, {
      email: this.state.playerEmail
    })
    .then(() => {
      this.setState({
       playerEmail: ''
      })
   })
   .then (() => Alert.alert('Player has been added!'))
   .catch((err)=>{console.error('error', err)})
  }

  viewTeam(){
    Actions.Team(this.props.data.id)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Invite some Friends!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email: </Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(playerEmail)=> this.handleChange(playerEmail)}
            returnKeyType= 'done'
            //onEndEditing={(playerEmail)=> this.handleOneEntry(playerEmail)}
            placeholder='Enter an email'
            placeholderTextColor = 'gray'
          />
        </View>

<View>
        <TouchableWithoutFeedback
          onPress={this.handleSubmit} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>
</View>
{/*
        <View style={styles.playerList}>
          <Text>Player List</Text>
          {this.state.players.map(player => {
            return
              <View key={playerEmail}>
                <Text>{playerEmail}</Text>
              </View>
            })
          }
        </View> */}

<View>
        <TouchableWithoutFeedback
          onPress={this.viewTeam}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Player List</Text>
          </View>
        </TouchableWithoutFeedback>
</View>

      </View>
    );
  }
}
