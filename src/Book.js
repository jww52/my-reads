import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    onShelfChange: PropTypes.func
  }

  handleChange = (event) => {
    console.log('book:', this.props.book.title, 'shelf:', event.target.value)
    this.props.onShelfChange(this.props.book, event.target.value)
  }

  render() {
    const { book } = this.props
    let coverStyle
    if (book.imageLinks) {
      coverStyle =  {
        width: 128,
        height: 193,
        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
      }} else {
      coverStyle = {
        backgroundColor: 'grey',
        color: 'white',
        textAlign: 'center',
        width: 128,
        height: 193
      }}

  return(
    <div>
      <li key={book.title}>
        <div className="book">
          <div className="book-top">
            {book.imageLinks ?
            <div className="book-cover" style={coverStyle}>
            </div>
            : <div className="book-cover" style={coverStyle}>{book.title}
            </div>}
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    </div>
    )
  }
}

export default Book;
