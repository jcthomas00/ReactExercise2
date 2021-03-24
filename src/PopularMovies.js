import React from 'react';
import UserList from './UserList';

class PopularMovies extends React.Component{
  render(){
    const movies = this.props.movies;
    const usersByMovie = {};
    this.props.profiles.forEach((profile)=>{
      if (usersByMovie[profile.favoriteMovieID])
        usersByMovie[profile.favoriteMovieID].push(profile.userID)
      else
        usersByMovie[profile.favoriteMovieID] = [profile.userID];
    });
    console.log(usersByMovie);
    return (<div>
      {Object.keys(movies).map((movie) => (
        <div key={movies[movie].id}>
          <h3>{movies[movie].name}</h3> 
		  Liked By:
				<UserList favMovie={movies[movie].id} users={this.props.users} usersByMovie={usersByMovie[movies[movie].id]} />
          <hr />
        </div>
      ))}
	</div>)
  }
}

export default PopularMovies;