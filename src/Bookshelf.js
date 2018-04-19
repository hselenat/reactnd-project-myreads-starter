import React from 'react'
import BookApp from "./App"
import Book from './Book'

class Bookshelf extends React.Component{
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book)=>(
                            <Book
                                key={book.id}
                                book={book}
                                change={this.props.change}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf