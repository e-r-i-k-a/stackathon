import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, schoolIp} from '../server/ip'

export default class Team extends Component {

  constructor(props) {
    super(props)
    this.state = {
      createdGame: {}
    }
  }

	componentDidMount () {
    axios.get(homeIp+'/api/game/'+this.props.data)
		.then(res => res.data)
		.then(createdGame => {
      return this.setState({createdGame})
    })
    .catch((err)=>{console.error('error', err)})
  }

  render() {
    if (this.state.createdGame.players) {
      return (
        <View style={styles.container}>

          <View>
            <Text style={styles.h2}>Check out your team!</Text>
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.button}>
              {
                this.state.createdGame.players.map(player => {
                  return <View key={player.id}>
                  <Text style={styles.buttonTextSmall}>{player.email}</Text>
                  </View>
                })
              }
            </View>
          </TouchableWithoutFeedback>

        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.h1}>Add some Players!</Text>
        </View>
      )
    }
  }
}
