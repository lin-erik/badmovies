const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  
};

const saveFavorite = function(callback) {
  // save movie to favorites in the database
};

const deleteFavorites = function(callback) {
  // delete a movie from favorites in the database
};

module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};