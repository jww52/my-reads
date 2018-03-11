import React from 'react'
import Book from './Book'
// import * as BooksAPI from './BooksAPI'

class Shelves extends React.Component {

  render() {
    let { books } = this.props

    return(
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.length && books.filter(book => book.shelf ==='currentlyReading').map((book) => (
                <Book book={book} key={book.id} onShelfChange={this.props.onShelfChange}/>
                )) }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.length && books.filter(book => book.shelf ==='wantToRead').map((book) => (
                <Book book={book} key={book.id} onShelfChange={this.props.onShelfChange}/>
                )) }
          </ol>
        </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.length && books.filter(book => book.shelf ==='read').map((book) => (
                <Book book={book} key={book.id} onShelfChange={this.props.onShelfChange}/>
                )) }
          </ol>
        </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default Shelves;
