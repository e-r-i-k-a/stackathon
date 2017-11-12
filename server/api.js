'use strict'
const api = require('express').Router()
const db = require('../db/models')
const Game = db.Game;
const Player = db.Player;
const bluebird = require('bluebird');

//GET:
// api.get('/player', (req, res, next) => {
//   db.Player.findAll({include: [{all: true}]})
//   .then(allData => {
//     res.json(allData);
//   })
//   .catch(next)
// })

api.get('/game', (req, res, next) => {
  db.Game.findAll({include: [{all: true}]})
  .then(allData => {
    res.json(allData);
  })
  .catch(next)
})

api.get('/game/:id', (req, res, next) => {
  db.Game.findOne({
    where: {
      id: Number(req.params.id)
    }
  })
  .then(game => {
    res.json(game);
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

module.exports = api
