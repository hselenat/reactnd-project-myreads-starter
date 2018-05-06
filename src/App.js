import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Searchpage from './Searchpage'
import Booklist from './Booklist';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {this.setState({ books })});
  };

  handleBookselfChange = (id, shelf) => {};

  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      this.setState((state) => {
        const updated = Object.assign({}, book, { shelf });
        return {
          books: state.books.filter(b => b.id !== book.id).concat([ updated ])
        };
      });
    });
  };

  render() { 
    const { books } = this.state;
    return (
      <div className="app">
        {/* {JSON.stringify(this.state.books)} */}
        <Route exact path='/search' render={()=>(
          <Searchpage
            books = { books }
            onUpdateBook = { this.updateBook }
          />
        )}/>
        <Route exact path='/' render={()=>(
          <Booklist 
            books = { books }
            onUpdateBook = { this.updateBook }
          />
        )}/>
      </div>
    );
  };
};

export default BooksApp;