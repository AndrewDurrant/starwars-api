import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Item from '../Item/Item';
import './App.css';

class App extends Component {
  state = {
    results: []
  }

  updateResults = (newResults) => {
    this.setState({
      results: newResults
    })
  }

  renderCharacters(results) {
    if (results.length === 0) {
      return <p>no results</p>
    } else {
      let itemList =
      results.map(character => {
        return <Item 
          key={character.id} 
          character={character} />
      })
      return itemList
    }

  }

  render() {
    return (
      <main className="App">
        <h1>STAR WARS DATA</h1>
        <SearchForm 
          updateResults={this.updateResults}
        />
        <ul className="content">
          {this.renderCharacters(this.state.results)}
        </ul>
      </main>
    );
  }
  
}

export default App;
