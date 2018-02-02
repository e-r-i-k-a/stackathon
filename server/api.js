'use strict'
const api = require('express').Router()
const db = require('../db/models')
const Game = db.Game;
const Player = db.Player;
const bluebird = require('bluebird');
const {resolve} = require('path')
// import {Linking} from 'react-native';

//GET:
api.get('/game', (req, res, next) => {
  db.Game.findAll({
    include: [{ all: true }]
  })
    .then(allData => {
      res.status(200).json(allData);
    })
    .catch(next)
})

api.get('/game/:id', (req, res, next) => {
  db.Game.findOne({
    include: [{ all: true }],
    where: {
      id: Number(req.params.id)
    }
  })
    .then(game => {
      res.status(200).json(game);
    })
    .catch(next)
})

//POST:
api.post('/game', (req, res, next) => {
  db.Game.create(req.body)
    .then((createdGame) => {
      res.status(201).json(createdGame)
    })
    .catch(next);
})

api.post('/player/game/:id', (req, res, next) => {
  db.Player.create({
    gameId: Number(req.params.id),
    email: req.body.email
  })
    .then((newPlayer) => {
      res.status(201).json(newPlayer)
    })
    .catch(next)
})

//RSVP PUT LINK (VIA GET ROUTE)
api.get('/player/:id/?min', (req, res, next) => {
  db.Player.findOne({
    where: {
      id: Number(req.params.id)
    }
  })
    .then(playerToConfirm => {
      playerToConfirm.update({
        confirmed: true
      })
      return playerToConfirm;
    })
    .then((confirmedPlayer) => {
      db.Player.findAndCountAll({
        where: {
          gameId: confirmedPlayer.gameId,
          confirmed: true
        }
      })
        .then((result) => {
          if ((result.count + 1) >= req.query.min) {
            db.Game.findOne({
              where: {
                id: Number(result.rows[0].dataValues.gameId)
              }
            })
            .then(readyGame => {
              readyGame.update({
                ready: true
              })
            })
            .then((updatedGame)=> {
              res.status(201).sendFile(resolve(__dirname, '..', 'public/ready.html'))
            })
            .catch(next)
          } else {
            res.status(201).sendFile(resolve(__dirname, '..', 'public/notReady.html'))
          }
        })
    })
    .then(() => { })
    .catch(next)
})

module.exports = api
