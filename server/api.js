'use strict'
const api = require('express').Router()
const db = require('../db/models')
const Game = db.Game;
const Player = db.Player;
const bluebird = require('bluebird');

//GET:
api.get('/game', (req, res, next) => {
  db.Game.findAll({include: [{all: true}]})
  .then(allData => {
    res.json(allData);
  })
  .catch(next)
})

api.get('/game/:id', (req, res, next) => {
  db.Game.findOne({
    include: [{all: true}],
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

//RSVP POST:
api.post('/player/:id', (req, res, next) => {
  db.Player.findOne({
    where: {
      id: Number(req.params.id)
    }
  })
  .then(playerToConfirm => {
    playerToConfirm.update ({
      confirmed: true
    })
    return playerToConfirm;
  })
  .then((confirmedPlayer)=>{
    db.Player.findAndCountAll({
      where: {
        gameId: confirmedPlayer.gameId,
        confirmed: true
      }
    })
    .then((result) => {
      if((result.count +1) >= req.query.min) {
        res.status(201).json({ready:true})
      } else {
        res.status(200).json()
      }
    })
  })
  .then(()=> {})
  .catch(next)
})

module.exports = api
