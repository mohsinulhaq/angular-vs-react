import React, { Component } from 'react';
import CardList from './CardList';
import Form from './Form';

class App extends Component {
  state = {
    users: []
  };
  addCard = (user) => {
    this.setState((prevState) => ({
      users: prevState.users.concat(user)
    }));
  };

  render() {
    return (
      <div>
        <Form formSubmit={this.addCard}/>
        <CardList cards={this.state.users}/>
      </div>
    );
  }
}

export default App;
