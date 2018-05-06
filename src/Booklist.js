import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Shelves from './Shelves'

const Booklist = ({ books, onUpdateBook }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>我的阅读书架</h1>
            </div>
            <div className="list-books-content">
                {Shelves.filter((s) => s.isShelf).map((s,i) => {
                    return(
                        <Bookshelf 
                            key = {i}
                            name = {s.name}
                            books = {books.filter((b) => b.shelf === s.value)}
                            onUpdateBook={onUpdateBook}
                        />
                    );
                })}
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

export default Booklist;