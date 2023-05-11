import React, { useState, useEffect } from 'react'
import Book from './Book';
import "./Home.css";
import books from './books.db'

function Home({ searchValue, resultWords , genre}) {

        return (
                <div className='home'>
                        {books.map((book) =>
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
                        )}
                </div>
        )
}

export default Home
