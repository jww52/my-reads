import React from 'react'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

import Book from './Book'

class SearchBar extends React.Component {
  state = {
    query: '',
    searchBooks: []
  }

  userShelfBooksMatch=()=>{
     const { books } = this.props
     books.forEach(book => {
       console.log('forEarch book from searchbar', book)
       var newSearchBooks = this.state.searchBooks.filter((b) => b.id !== book.id)
       console.log('filter result: newSearchBooks:', newSearchBooks)
       if(newSearchBooks && newSearchBooks < this.state.searchBooks){
         this.setState((state) => ({
           searchBooks: newSearchBooks.concat([book])
         }))
       }
     });
   }
   updateQuery = (query) => {
     this.setState({ query })
     if (query) {
       query = escapeRegExp(query)
       BooksAPI.search(query).then((books) => {
         if(!books || books.error){
           console.log('!books')
           this.setState({ searchBooks: [] })
         }else{
           books.map(book => (book.shelf = "none"))
           this.setState({ searchBooks: books})
           this.userShelfBooksMatch();
         }
       })
     } else {
       this.setState({ searchBooks: [] })
     }
   }

  render() {
    console.log("searchBooks", this.state.searchBooks)

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

            <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">

          <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Search Results</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.state.searchBooks && this.state.searchBooks.map((book) => (
              <Book book={book} key={book.id} onShelfChange={this.props.onShelfChange}/>
            ))}
               </ol>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
