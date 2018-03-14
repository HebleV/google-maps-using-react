import React, { Component } from 'react';




export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (<div>

              <input
                     value={this.state.term}
                     onChange={event => this.onInputChange(event.target.value)}
                     id="autocomplete"
                     placeholder="Type here..."

               />

            </div>);
  }

  onInputChange(term)  {
      	this.setState({term});
      }

}
