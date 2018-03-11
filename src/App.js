import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'

import './App.css'

import Shelves from './Shelves'
import SearchBar from './SearchBar'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfChange = (book,newShelf) => {
     book.shelf=newShelf
     this.setState((state) => (
       {books: state.books.filter((bk) => bk.id !== book.id).concat([ book ])
     }))
     BooksAPI.update(book,newShelf)
   }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <SearchBar books={this.state.books} onShelfChange={this.shelfChange}/>
          )}/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            <Shelves books={this.state.books} onShelfChange={this.shelfChange}/>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
