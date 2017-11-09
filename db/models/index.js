'use strict';

const db = require('../../db')
const Sequelize = require('sequelize');

const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING
  },
	date: {
		type: Sequelize.DATE
  },
  minPlayer: {
    type: Sequelize.INTEGER
  },
  maxPlayer: {
    type: Sequelize.INTEGER
  },
  confirmationDate: {
    type: Sequelize.DATE
  }
})

const Player = db.define('player', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
    type: Sequelize.STRING,
    isEmail: true
	}
})

// associations:
Player.belongsTo(Game);
Game.hasMany(Player);

module.exports = {Game, Player}
