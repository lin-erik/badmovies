const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');

module.exports = {
  genre: function(cb) {
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: API_KEY
      }
    })
      .then(response => {
        console.log('Processing genre GET');
        cb(null, response.data.genres);
      })
      .catch(err => {
        console.error('Error getting genres', err)
      })
  }
}



// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover

// Don't forget to export your functions and require them within your server file