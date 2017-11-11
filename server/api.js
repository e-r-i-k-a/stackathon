'use strict'
const api = require('express').Router()
const db = require('../db/models')
const Game = db.Game;
const Player = db.Player;
const bluebird = require('bluebird');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// api.get('/', (req, res, next) => res.send({hello: 'world'}))

//GET:
api.get('/player', (req, res, next) => {
  db.Player.findAll({include: [{all: true}]})
  .then(allData => {
    res.json(allData);
  })
  .catch(next)
})

api.get('/game', (req, res, next) => {
  db.Game.findAll({include: [{all: true}]})
  .then(allData => {
    res.json(allData);
  })
  .catch(next)
})

//POST:
api.post('/game', (req, res, next) => {
  db.Game.create(req.body)
  .then((game) => {
    res.status(201).json(game);
  })
  .catch(next);
})


// //POST:
// api.post('/students', function (req, res, next) {
//   db.Player.create(req.body)
//   .then ((students) => {
//     res.status(201).json(students);
//   })
//   .catch(next);
// })

// api.post('/Game', function (req, res, next) {
//   db.Game.create(req.body)
//   .then ((students) => {
//     res.status(201).json(students);
//   })
//   .catch(next);
// })

// api.get('/Game', (req, res, next) => {
//   db.Game.findAll()
//   .then((Game) => {
//     res.status(200).json(Game);
//   })
//   .catch(next);
// })

// api.get('/Game/:id', (req, res, next) => {
// 	db.Game.findOne({
// 		include: [{model: Player}],
// 		where: {
// 			id: Number(req.params.id)
// 		}
// 	})
// 	.then(Game => {
// 		res.json(Game)
// 	})
// 	.catch(next)
// })

// api.get('/students', (req, res, next) => {
//   db.Player.findAll({include:[{model: Game}]})
//   .then((students) => {
//     res.status(200).json(students);
//   })
//   .catch(next);
// })

// api.get('/students/:id', (req, res, next) => {
// 	db.Player.findOne({
// 		include: [{model: Game}],
// 		where: {
// 			id: Number(req.params.id)
// 		}
// 	})
// 	.then(student => {
// 		res.json(student)
// 	})
// 	.catch(next)
// })

// //DELETE:
// api.delete('/Game/:id', (req, res, next) => {
//   const id = Number(req.params.id);
//   db.Player.destroy({
//     where: {GameId: id}
//   })
//   .then(()=>db.Game.destroy({
//     where: {id}
//   }))
//   .then(()=>res.sendStatus(202))
//   .catch(next)
// });

// api.delete('/students/:id', (req, res, next) => {
//   const id = Number(req.params.id);
//   db.Player.destroy({
//      where: { id }
//     })
//     .then(()=>res.sendStatus(202))
//     .catch(next);
// });

// //PUT
// api.put('/students/:id/edit', (req, res, next) => {
//   const id = Number(req.params.id);
//   db.Player.findOne({
// 		include: [{model: Game}],
// 		where: {id}
// 	})
// 	.then(studentToUpdate => {
//     studentToUpdate.update({
//       name: req.body.inputName,
//       email: req.body.inputEmail,
//       GameId: req.body.selectedGameId
//     })
//   })
//   .then((updatedStudent) => {
//     res.status(200).json(updatedStudent)
//   })
//   .catch(next);
// })

module.exports = api
