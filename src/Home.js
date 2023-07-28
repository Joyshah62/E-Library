import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './Book';
import { App as RealmApp, Credentials } from 'realm-web';
import "./Home.css";
require('dotenv').config();
// import books from './books.db'

function Home({ searchValue, resultWords, genre }) {

        const [books, setBooks] = useState([]);

        // Fetch book Data using mongodb Atlas API

        // useEffect(() => {

        //         // console.log(process.env.REACT_APP_REALM_APP_ID);
        //         const REALM_APP_ID = process.env.REACT_APP_REALM_APP_ID;
        //         const app = new RealmApp({ id: REALM_APP_ID });

        //         // const envVariables = process.env;
        //         // console.log(envVariables);

        //         const fetchBooks = async () => {
        //                 try {
        //                         const email = process.env.REACT_APP_EMAIL.toString();
        //                         const passwd = process.env.REACT_APP_PASSWORD.toString();
        //                         const credentials = Credentials.emailPassword(email, passwd);

        //                         // const credentials = Credentials.emailPassword("hetpsoni@gmail.com", "emailAuthPassHet@23")
        //                         const user = await app.logIn(credentials);
        //                         // console.log('User:', user);

        //                         const userAccessToken = user.accessToken; // Get the user's access token

        //                         const response = await axios.get(
        //                                 'https://ap-south-1.aws.data.mongodb-api.com/app/eduzoneatlas-yqgfv/endpoint/getbooks',
        //                                 {
        //                                         // Include the user's access token in the request headers
        //                                         headers: {
        //                                                 Authorization: `Bearer ${userAccessToken}`,
        //                                         },
        //                                 }
        //                         );
        //                         // console.log('All books:', response.data);
        //                         setBooks(response.data);
        //                 } catch (error) {
        //                         console.log('Error fetching books:', error);
        //                         // Handle errors gracefully, e.g., show an error message to the user
        //                 }
        //         };

        //         fetchBooks();
        // }, []);

        // Fetch Book data using local Flask API

        useEffect(() => {
                // Fetch book data from Flask API
                axios.get('http://127.0.0.1:5000/getall')
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
