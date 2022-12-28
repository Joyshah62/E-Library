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
        title="Rich Dad Poor Dad"
        price={190}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81PuKheA8xL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1671895201&sprefix=rich+d%2Caps%2C283&sr=8-3"
        />
        <Book
        id="2"
        title="Atomic Habits"
        price={430}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?keywords=atomic+habits&qid=1671895226&sprefix=Atomic+%2Caps%2C285&sr=8-1"
        />
        <Book
        id="3"
        title="It Starts With Us"
        price={195}
        rating={4}  
        image="https://images-eu.ssl-images-amazon.com/images/I/81FummIc2eL._AC_UL600_SR600,400_.jpg"
        link="https://www.amazon.in/Starts-Us-Colleen-Hoover/dp/1398518174/ref=sr_1_2?keywords=it+starts+with+us&qid=1671895261&sprefix=it+%2Caps%2C441&sr=8-2"
        />
        <Book
        id="4"
        title="The 48 Laws of Power"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        link="https://drive.google.com/file/d/14RERTTCx3UWp9FwO7d2I_-u_JwS9C_IK/view?usp=share_link"/>
        
        </div>

        
        <div className="home__row">

        <Book
        id="5"
        title="Dark Psychology"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41JPhsbd3pL._SX312_BO1,204,203,200_.jpg"
        link="https://drive.google.com/file/d/10dmzg0vn8aqSH8LnJn-p4HUEGx2fJ0yZ/view?usp=share_link"/>


        <Book
        id="6"
        title="Do Epic Shit"
        price={300}
        rating={5}  
        image="https://m.media-amazon.com/images/I/61kRkfsIMUL.jpg"
        link="https://www.amazon.in/DO-EPIC-SHIT-Ankur-Warikoo/dp/9391165486/ref=sr_1_3?keywords=do+epic+shit&qid=1671881040&sprefix=do+epic+%2Caps%2C262&sr=8-3"

        />
        <Book
        id="7"
        title="Harry Potter"
        price={199}
        rating={5}  
        image="https://99booksstore.com/uploaded_files/product/464279588.webp"
        link="https://drive.google.com/file/d/19yq-tpfTIg1YkElWvuvNcFHXX8NlQTST/view?usp=share_link"/>
        <Book
        id="8"
        title="Ikigai"
        price={329}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
        link="https://drive.google.com/file/d/1SkNy7_9t0i15lE8-8Db1HKEKHMg_v8aS/view?usp=share_link"/>
        
        </div>

        

        <div className="home__row">

        <Book
        id="9"
        title="Something I Never Told You"
        price={159}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51Xjv4IzydL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Something-I-Never-Told-You/dp/0143445901/ref=sr_1_5?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-5"/>

      <Book
        id="10"
        title="That Night"
        price={169}
        rating={4}  
        image="https://m.media-amazon.com/images/I/41kRkqIt6aL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/That-Night-Friends-Haunting-Secret/dp/0143451871/ref=sr_1_6?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-6"/>


        <Book
        id="11"
        title="It Ends With Us: A Novel"
        price={230}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/ref=sr_1_4?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-4"

        />
        <Book
        id="12"
        title="The Psychology of Money"
        price={169}
        rating={5}  
        image="https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_20?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-20"/>
       
        
        </div>

        <div className="home__row">

        <Book
        id="13"
        title="The Freedom Manifesto"
        price={223}
        rating={4}  
        image="https://m.media-amazon.com/images/I/419hlQBPe6L.jpg"
        link="https://www.amazon.in/Freedom-Manifesto-Rules-Live-Calling-ebook/dp/B0BFJP92NL/ref=sr_1_1_sspa?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"/>

        <Book
        id="14"
        title="You Only Live Once"
        price={141}
        rating={4}  
        image="https://m.media-amazon.com/images/I/413OgI8KzuL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_14?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-14"/>

      <Book
        id="15"
        title="The Blue Umbrella"
        price={94}
        rating={4}  
        image="https://m.media-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Blue-Umbrella-Ruskin-Bond/dp/8171673406/ref=sr_1_17?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-17"/>


        <Book
        id="16"
        title="The Subtle Art of Not Giving a F*ck"
        price={272}
        rating={4}  
        image="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549/ref=sr_1_3?crid=3KZSAKV92NNA4&keywords=the+art+of+not+giving+a+fcuk+book&qid=1672240461&sprefix=the+art+of+not+%2Caps%2C305&sr=8-3"
        />
        
        
        </div>

        
        
    </div>
  )
}

export default Home