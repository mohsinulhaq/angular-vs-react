import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    branch: ''
  };

  formHandler = (event) => {
    event.preventDefault();
    this.props.formSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.formHandler}>
        <input type="text" placeholder="Name" value={this.state.name}
               onChange={event => this.setState({name: event.target.value})} required/>
        <input type="text" placeholder="Branch" value={this.state.branch}
               onChange={event => this.setState({branch: event.target.value})} required/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}

export default Form;
