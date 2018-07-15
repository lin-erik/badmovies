import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
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

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {this.state.genres.map( (genre) => {
            return(<option key={genre.id}>{genre.name}</option>)
          })}
        </select>

        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;