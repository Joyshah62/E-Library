import React from 'react'
import "./Home.css";
import Book from './Book';
function Home() {
  return (
    <div className='home'>
        <img className='home__image'
        src='https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000'
        alt=''
        />

        {/* product id, title, price, rating, image */}
        <div className="home__row">
        <Book
        id="1"
        title="Do Epic Shit"
        price={300}
        rating={5}  
        image="https://m.media-amazon.com/images/I/61kRkfsIMUL.jpg"

        />
        <Book
        id="2"
        title="Harry Potter"
        price={199}
        rating={5}  
        image="https://99booksstore.com/uploaded_files/product/464279588.webp"

        />
        <Book
        id="3"
        title="Ikigai"
        price={329}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"

        />

        
        </div>
        <div className="home__row">
        <Book
        id="4"
        title="Rich Dad Poor Dad"
        price={190}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL600_SR600,400_.jpg"

        />
        <Book
        id="5"
        title="Atomic Habits"
        price={430}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"

        />
        <Book
        id="6"
        title="It Starts With Us"
        price={195}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81FummIc2eL._AC_UL600_SR600,400_.jpg"

        />

        
        </div>
        
    </div>
  )
}

export default Home