import React from 'react'
import Shelves from './Shelves'

const Book = ({book, onUpdateBook}) => {
    const bookImage = book.imageLinks && (book.imageLinks.smallThumbnail || book.imageLinks.thumbnail);
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url("${bookImage}")`
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select 
                            value={book.shelf}
                            onChange={(event) => onUpdateBook(book, event.target.value)}
                        >
                            {/* <option value="none" disabled>Move to...</option> */}
                            {Shelves.map((s) => {
                                return (
                                    <option
                                        key = {`${book.id}-${book.title}-${s.name}`}
                                        disabled = { s.disabled }
                                        value = {s.value }
                                    >
                                        { s.name }
                                    </option>
                                );
                            })};
                        </select>
                    </div>
                </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{(book.authors || []).join(', ')}</div>
        </div>
    </li>
    );
};

export default Book;