import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import uniqBy from 'lodash.uniqby'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

const max_results = 10;
class Searchpage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    };

    state = {
        results: [],
        query: ''
    };

    componentDidMount() {
        this.searchInput.focus();
    };

    componentWillReceiveProps(nextProps) {
        // const { books } = this.props;
        if (nextProps.books !== this.props) {
            const results = this.state.results.map((r) =>{
                const bookOnShelf = nextProps.books.find(b => b.id === r.id);
                if(bookOnShelf) {
                    r.shelf = bookOnShelf.shelf;
                };
                return r;
            });
            this.setState({ results });
        };
    };
    search = (query) => {
        this.setState({ query });
        if(query) {
            BooksAPI.search(query,max_results).then((results) => {
                if (results && this.state.results !== results) {
                    results = uniqBy(results, (r) => r.id);
                    results = results.map((r) => {
                      const bookOnShelf = this.props.books.find(b => b.id === r.id);
                      if (bookOnShelf) {
                        r.shelf = bookOnShelf.shelf;
                      }
                      return r;
                    })
                    this.setState({ results });
                  };
            });
        } else {
            this.setState({ results: [] });
        };
    };

    render() {
        const { results, query } = this.state;
        const { onUpdateBook } = this.props;
        results.sort(sortBy('title'));
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="请输入书名或作者..."
                            onChange={(event)=>this.search(event.target.value)}
                            ref={(input) => { this.searchInput = input; }}
                            value = {query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {results.map((book)=>{
                            return (
                                <Book
                                    key={`${book.id}-${book.title}`}
                                    book={book}
                                    onUpdateBook={onUpdateBook}
                                />
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    };
};

export default Searchpage;