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
  // maxPlayer: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: null
  // },
  // confirmationDate: {
  //   type: Sequelize.DATE
  // },
  ready: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

const Player = db.define('player', {
	email: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   isEmail: true
    // }
  },
  // name: {
	// 	type: Sequelize.STRING,
  // },
  confirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

// associations:
Player.belongsTo(Game);
Game.hasMany(Player);

module.exports = {Game, Player}
