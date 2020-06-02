import React, { Component } from 'react'
import './SearchForm.css'

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: {
        value: '',
        touched: false
      },
      category: {
        value: 'people'
      }
    }
  }

  updateSearchItem(searchItem) {
    this.setState({
      searchItem: {
        value: searchItem
      }
    })
  }

  updateCategory(selectedCategory) {
    this.setState({
      category: {
        value: selectedCategory
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { searchItem, category } = this.state;
    return fetch(`https://swapi-thinkful.herokuapp.com/api/${category.value}/?search=${searchItem.value}`)
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
      .then(data => {
        console.log(data);
        return this.props.updateResults(data.results)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="category">Category:</label>
        <select 
          id="category" 
          value={this.state.category.value} 
          onChange={e => this.updateCategory(e.target.value)}>
          <option value="films">films</option>
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="starships">starships</option>
          <option value="vehicle">Vehicle</option>
        </select>
        <br />
        <label htmlFor="searchItem">Stay on target and choose a search term:</label>
        <input name="searchItem"
          type="text"
          id="searchItem"
          value={this.state.searchItem.value}
          onChange={e => this.updateSearchItem(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SearchForm
