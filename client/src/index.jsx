import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [],
      showFaves: false,
    };

    this.getMovies = this.getMovies.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genreId) {
    axios.get('/search', {
      params: {
        genreId
      }
    })
       .then(response => {
         console.log('GET request for search to localhost', response);
         this.setState({
           movies: response.data.results
         })
       })
       .catch(err => {
         console.error('Error searching from localhost', err);
       });
  }

  saveMovie() {
    axios.post('/save', {
      params: {
        
      }
    })
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    this.getMovies(28);
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
