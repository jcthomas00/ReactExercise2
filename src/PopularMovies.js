import React from 'react';

class PopularMovies extends React.Component{
  render(){
    <div>
      {this.props.movies.map((movie) => (
      <div key={movie.id}>
          <h3>movie.name</h3>
      </div>
	  <hr />
      ))}
	</div>
  }
}

export default PopularMovies;