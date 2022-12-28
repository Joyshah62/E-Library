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
        title="Book: Rich Dad Poor Dad"
        author="Author: Robert Kiyosaki"
        price={190}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1671895201&sprefix=rich+d%2Caps%2C283&sr=8-3"
        download=""
        />
        <Book
        id="2"
        title="Book: Atomic Habits"
        author="Author: James Clear"
        price={430}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?keywords=atomic+habits&qid=1671895226&sprefix=Atomic+%2Caps%2C285&sr=8-1"
        download=""
        />
        <Book
        id="3"
        title="Book: It Starts With Us"
        author="Author: Colleen Hoover"
        price={195}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81FummIc2eL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Starts-Us-Colleen-Hoover/dp/1398518174/ref=sr_1_2?keywords=it+starts+with+us&qid=1671895261&sprefix=it+%2Caps%2C441&sr=8-2"
        download=""
        />
        <Book
        id="4"
        title="Book: The 48 Laws of Power"
        author="Author: Robert Greene"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        link="https://drive.google.com/file/d/14RERTTCx3UWp9FwO7d2I_-u_JwS9C_IK/view?usp=share_link"
        download="https://drive.google.com/file/d/14RERTTCx3UWp9FwO7d2I_-u_JwS9C_IK/view?usp=share_link"
        />
        
        </div>

        
        <div className="home__row">

        <Book
        id="5"
        title="Book: Dark Psychology"
        author="Author: James Williams"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41JPhsbd3pL._SX312_BO1,204,203,200_.jpg"
        link="https://drive.google.com/file/d/10dmzg0vn8aqSH8LnJn-p4HUEGx2fJ0yZ/view?usp=share_link"
        download="https://drive.google.com/file/d/10dmzg0vn8aqSH8LnJn-p4HUEGx2fJ0yZ/view?usp=share_link"
        />


        <Book
        id="6"
        title="Book: Do Epic Shit"
        author="Author: Ankur Warikoo"
        price={300}
        rating={5}  
        image="https://m.media-amazon.com/images/I/61kRkfsIMUL.jpg"
        link="https://www.amazon.in/DO-EPIC-SHIT-Ankur-Warikoo/dp/9391165486/ref=sr_1_3?keywords=do+epic+shit&qid=1671881040&sprefix=do+epic+%2Caps%2C262&sr=8-3"
        download=""
        />
        <Book
        id="7"
        title="Book: Harry Potter"
        author="Author: J.K. Rowling"
        price={199}
        rating={5}  
        image="https://99booksstore.com/uploaded_files/product/464279588.webp"
        link="https://drive.google.com/file/d/19yq-tpfTIg1YkElWvuvNcFHXX8NlQTST/view?usp=share_link"
        download="https://drive.google.com/file/d/19yq-tpfTIg1YkElWvuvNcFHXX8NlQTST/view?usp=share_link"
        />
        <Book
        id="8"
        title="Book: Ikigai"
        author="Author: Rector Garcia"
        price={329}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
        link="https://drive.google.com/file/d/1SkNy7_9t0i15lE8-8Db1HKEKHMg_v8aS/view?usp=share_link"
        download="https://drive.google.com/file/d/1SkNy7_9t0i15lE8-8Db1HKEKHMg_v8aS/view?usp=share_link"
        />
        
        </div>

        

        <div className="home__row">

        <Book
        id="9"
        title="Book: Something I Never Told You"
        author="Author: Shravya Bhinder"
        price={159}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51Xjv4IzydL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Something-I-Never-Told-You/dp/0143445901/ref=sr_1_5?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-5"
        download=""
        />

      <Book
        id="10"
        title="Book: That Night"
        author="Author: Nidhi Upadhyay"
        price={169}
        rating={4}  
        image="https://m.media-amazon.com/images/I/41kRkqIt6aL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/That-Night-Friends-Haunting-Secret/dp/0143451871/ref=sr_1_6?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-6"
        download=""
        />


        <Book
        id="11"
        title="Book: It Ends With Us: A Novel"
        author="Author: Colleen Hoover"
        price={230}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/ref=sr_1_4?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-4"
        download=""
        />
        <Book
        id="12"
        title="Book: The Psychology of Money"
        author="Author: Morgan Housel"
        price={169}
        rating={5}  
        image="https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_20?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-20"
        download=""
        />
       
        
        </div>

        <div className="home__row">

        <Book
        id="13"
        title="Book: The Freedom Manifesto"
        author="Author: Karan Bajaj"
        price={223}
        rating={4}  
        image="https://m.media-amazon.com/images/I/419hlQBPe6L.jpg"
        link="https://www.amazon.in/Freedom-Manifesto-Rules-Live-Calling-ebook/dp/B0BFJP92NL/ref=sr_1_1_sspa?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
        download=""
        />

        <Book
        id="14"
        title="Book: You Only Live Once"
        author="Author: Stuti Changle"
        price={141}
        rating={4}  
        image="https://m.media-amazon.com/images/I/413OgI8KzuL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_14?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-14"
        download=""
        />

      <Book
        id="15"
        title="Book: The Blue Umbrella"
        author="Author: Ruskin Bond"
        price={94}
        rating={4}  
        image="https://m.media-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Blue-Umbrella-Ruskin-Bond/dp/8171673406/ref=sr_1_17?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-17"
        download=""
        />


        <Book
        id="16"
        title="Book: The Subtle Art of Not Giving a F*ck"
        author="Author: Mark Manson"
        price={272}
        rating={4}  
        image="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1671895201&sprefix=rich+d%2Caps%2C283&sr=8-3"
        download=""
        />
        
        
        </div>

        
        
    </div>
  )
}

export default Home