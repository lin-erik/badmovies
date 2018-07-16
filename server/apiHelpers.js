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
      });
  },

  search: function(genreId, cb) {
    axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        sort_by: 'popularity.asc'
      }
    })
      .then(response => {
        console.log('Processing search GET');
        cb(null, response.data);
      })
      .catch(err => {
        console.error('Error searching');
      })
  }
}
