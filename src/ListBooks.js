import React from 'react'

import BookShelfChanger from './BookShelfChanger'

class ListBooks extends React.Component{
  state = {

  }


  render(){
    const { books } = this.props
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                  </div>
                  <BookShelfChanger/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
            ))}
        </ol>
      </div>
    )
  }
}

export default ListBooks;
