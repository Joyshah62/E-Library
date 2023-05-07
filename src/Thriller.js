import React from 'react'
import Book from './Book';
import books from './books.db';
import "./Home.css";

function thriller({ searchValue, resultWords }) {
  return (
    <div className='home'>
      {books
        .filter((book) => book.genre && book.genre.includes('thriller'))
        .map((book) =>
          resultWords.some(word => book.title.toLowerCase().includes(word.toLowerCase())) &&
          book.title.toLowerCase().includes(searchValue.toLowerCase()) && (
            <div className="home__row">
              <Book
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                rating={book.rating}
                image={book.image}
                link={book.url}
                download={book.download}
                author_link={book.author_link}
              />
            </div>
          )
        )
      }
    </div>
  )
}

export default thriller