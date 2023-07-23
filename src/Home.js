import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
import Book from './Book';
import "./Home.css";
import books from './books.db'

function Home({ searchValue, resultWords, genre }) {

        const [books, setBooks] = useState([]);

        useEffect(() => {
                // Fetch book data from Flask API
                axios.get('http://localhost:5000/getall')
                        .then(response => {
                                setBooks(response.data);
                        })
                        .catch(error => {
                                console.error('Error fetching book data:', error);
                        });
        }, []);

        return (
                <div className='home'>
                        {books
                                .filter((book) => genre === "" || (book.genre || []).includes(genre))

                                // .filter((book) => {
                                //         if (genre === "") {
                                //                 return true; // Show all books when genre is empty
                                //         }
                                //         const bookGenres = book.genre || []; // Use an empty array if book.genre is undefined
                                //         return bookGenres.includes(genre);
                                // }) // Filter books by genre

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
                                )}
                </div>
        )
}

export default Home
