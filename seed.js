const express = require('express')
const db = require('./db')
const Game = require('./db/models').Game;
const Player = require('./db/models').Player;

db
  .sync({force: true})
  .then(() => {
    console.log('planting seeds');
    return Game.bulkCreate([
      {
        name: 'RudeBoyz',
        type: 'Soccer',
        date: 12/18/17,
        minPlayer: 2,
        maxPlayer: 25,
        confirmationDate: 12/24/17
      },
      {
        name: 'Sunnyside Basketball League',
        type: 'Basketball',
        date: 12/28/17,
        minPlayer: 5,
        confirmationDate: 12/24/17
      },
      {
        name: 'Game Night',
        type: 'Scrabble',
        date: 12/4/17,
        minPlayer: 2,
        maxPlayer: 4,
        confirmationDate: 12/1/17
      },
      {
        name: 'Friday evening bikeride',
        type: 'Tandem biking',
        date: 11/16/17,
        minPlayer: 2,
        maxPlayer: 2,
        confirmationDate: 11/13/17
      },
      {
        name: 'Tennis game',
        type: 'Tennis',
        date: 11/22/17,
        minPlayer: 2,
        maxPlayer: 4,
        confirmationDate: 11/18/17
      },
      {
        name: 'Nerd night',
        type: 'Risk',
        date: 11/29/17,
        minPlayer: 4,
        maxPlayer: 4,
        confirmationDate: 11/24/17
      },
      {
        name: 'Weekly card game',
        type: 'Go Fish',
        date: 12/18/17,
        minPlayer: 2,
        confirmationDate: 11/15/17
      }
    ]);
  })
  .then(() => {
    console.log('planting more seeds');
    return Player.bulkCreate([
      {
        name: 'erika',
        email: 'erika@aol.com',
        GameId: '1'
      },
      {
        name: 'george',
        email: 'george@aol.com',
        GameId: '1'
      },
      {
        name: 'heather',
        email: 'heather@aol.com',
        GameId: '2'
      },
      {
        name: 'david',
        email: 'david@aol.com',
        GameId: '3'
      },
      {
        name: 'shelley',
        email: 'shelley@aol.com',
        GameId: '4'
      },
      {
        name: 'francisco',
        email: 'fco@aol.com',
        GameId: '1'
      },
      {
        name: 'nicole',
        email: 'nicole@aol.com',
        GameId: '5'
      },
      {
        name: 'nadim',
        email: 'nadim@aol.com',
        GameId: '6'
      },
      {
        name: 'anna',
        email: 'anna@aol.com',
        GameId: '7'
      },
      {
        name: 'corey',
        email: 'corey@aol.com',
        GameId: '7'
      },
      {
        name: 'priya',
        email: 'priya@aol.com',
        GameId: '4'
      }
    ]);
  })
  .then(() => {
    console.log('flowers bloomed');
    db.close();
    return null;
  });
