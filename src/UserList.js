import React, { Component } from "react";

class UserList extends Component{
  render(){
    const users = this.props.users;
    const usersByMovie = this.props.usersByMovie;
    
    if (!usersByMovie){
          return <p>No one likes this movie.</p>
    }
    
    const newList = usersByMovie.map((userId) => {
      console.log("u: "+users[userId].name);
      return <li>{users[userId].name}</li>;
    });
    
    
    return <ul>{newList}</ul>;
  }
}

export default UserList;