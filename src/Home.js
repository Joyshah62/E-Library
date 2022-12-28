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
        link="https://www.amazon.in/DO-EPIC-SHIT-Ankur-Warikoo/dp/9391165486/ref=sr_1_3?keywords=do+epic+shit&qid=1671881040&sprefix=do+epic+%2Caps%2C262&sr=8-3"

        />
        <Book
        id="2"
        title="Harry Potter"
        price={199}
        rating={5}  
        image="https://99booksstore.com/uploaded_files/product/464279588.webp"
        link="https://drive.google.com/file/d/19yq-tpfTIg1YkElWvuvNcFHXX8NlQTST/view?usp=share_link"/>
        <Book
        id="3"
        title="Ikigai"
        price={329}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"
        link="https://drive.google.com/file/d/1SkNy7_9t0i15lE8-8Db1HKEKHMg_v8aS/view?usp=share_link"/>

        
        </div>
        <div className="home__row">
        <Book
        id="4"
        title="Rich Dad Poor Dad"
        price={190}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1671895201&sprefix=rich+d%2Caps%2C283&sr=8-3"
        />
        <Book
        id="5"
        title="Atomic Habits"
        price={430}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?keywords=atomic+habits&qid=1671895226&sprefix=Atomic+%2Caps%2C285&sr=8-1"
        />
        <Book
        id="6"
        title="It Starts With Us"
        price={195}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81FummIc2eL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Starts-Us-Colleen-Hoover/dp/1398518174/ref=sr_1_2?keywords=it+starts+with+us&qid=1671895261&sprefix=it+%2Caps%2C441&sr=8-2"
        />
        <Book
        id="7"
        title="The 48 Laws of Power"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        link="https://drive.google.com/file/d/14RERTTCx3UWp9FwO7d2I_-u_JwS9C_IK/view?usp=share_link"/>
        <Book
        id="8"
        title="It Starts With Us"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51andXe56rL.jpg"
        link="https://drive.google.com/file/d/10dmzg0vn8aqSH8LnJn-p4HUEGx2fJ0yZ/view?usp=share_link"/>

        
        </div>
        
    </div>
  )
}

export default Home