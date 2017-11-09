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
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      isNumeric: true,
      min: 1
    }
  },
  maxPlayer: {
    type: Sequelize.INTEGER,
    defaultValue: null
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
    validate: {
      isEmail: true
    }
	}
})

// associations:
Player.belongsTo(Game);
Game.hasMany(Player);

module.exports = {Game, Player}
