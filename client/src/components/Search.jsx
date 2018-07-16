import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: [],
      selected: 28
    };

    this.handleGenre = this.handleGenre.bind(this);
  }

  getGenres() {
    axios.get('/genres')
         .then(response => {
            console.log('GET request for genre to localhost');
            this.setState({
              genres: response.data
            });

            console.log('The genres', this.state.genres);
         })
         .catch(err => {
            console.error('Error from localhost', err);
         });
  }

  handleGenre(e) {
    this.setState({
      selected: e.target.value
    });
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select value={this.state.selected} onChange={(e) => {return this.handleGenre(e)}}>
          {this.state.genres.map( (genre) => {
            return(<option value={genre.id}>{genre.name}</option>)
          })}
        </select>

        <br/><br/>

        <button onClick={() => {
          return this.props.getMovies(this.state.selected)
        }}>Search</button>

      </div>
    );
  }
}

export default Search;
