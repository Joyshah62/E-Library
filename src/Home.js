import React from 'react'
import "./Home.css";
import Book from './Book';
import Carousel from './Carousel';
import { countries } from './Data';
function Home() {
  return (
    <div className='home'>
        {/* <img className='home__image'
        src='https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000'
        alt=''
        /> */}
        {/* <div>
          <Carousel images={countries}/>
        </div> */}

        {/* product id, title, price, rating, image */}
        
        <div className="home__row">
        <Book
        id="1"
        title="Rich Dad Poor Dad"
        by="by "
        author="Robert Kiyosaki"
        price={190}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51A88IvtjGL._SX331_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1671895201&sprefix=rich+d%2Caps%2C283&sr=8-3"
        download="https://drive.google.com/file/d/1psj0n3NDZ75W3-nyoaJIJr0xLjicNhJV/view?usp=share_link"
        author_link="https://en.wikipedia.org/wiki/Robert_Kiyosaki"
        />
        <Book
        id="2"
        title="Atomic Habits"
        by="by "
        author="James Clear"
        price={430}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?keywords=atomic+habits&qid=1671895226&sprefix=Atomic+%2Caps%2C285&sr=8-1"
        download="https://drive.google.com/file/d/1dpM7_-DMX4aA4Zof3hX5El6huRf60Qga/view?usp=share_link"
        />
        <Book
        id="3"
        title="It Starts With Us"
        by="by "
        author="Colleen Hoover"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Starts-Us-Colleen-Hoover/dp/1398518174/ref=sr_1_2?keywords=it+starts+with+us&qid=1671895261&sprefix=it+%2Caps%2C441&sr=8-2"
        download="https://drive.google.com/file/d/1UTz5zdhjK8q6DrfHSBoyJpcBobzH_KML/view?usp=share_link"
        />
        <Book
        id="4"
        title="The 48 Laws of Power"
        by="by "
        author="Robert Greene"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        link="https://www.amazon.in/Laws-Power-Robert-Greene-Collection/dp/1861972784/ref=sr_1_2?crid=38D2BF8CZB7TP&keywords=48+laws+of+power&qid=1672246599&sprefix=the+48%2Caps%2C340&sr=8-2"
        download="https://drive.google.com/file/d/14RERTTCx3UWp9FwO7d2I_-u_JwS9C_IK/view?usp=share_link"
        />
        
        </div>

        
        <div className="home__row">

        <Book
        id="5"
        title="Dark Psychology"
        by="by "
        author="James Williams"
        price={195}
        rating={4}  
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41JPhsbd3pL._SX312_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Dark-Psychology-Psychological-Manipulation-Persuasion-ebook/dp/B07NRTWWJK/ref=sr_1_1?keywords=dark+psychology+james+williams&qid=1672246495&sprefix=dark+psychology+jam%2Caps%2C344&sr=8-1"
        download="https://drive.google.com/file/d/10dmzg0vn8aqSH8LnJn-p4HUEGx2fJ0yZ/view?usp=share_link"
        />


        <Book
        id="6"
        title="The Godfather"
        by="by "
        author="Mario Puzo"
        price={1000}
        rating={4}  
        image="https://m.media-amazon.com/images/I/41pSXiKR39L.jpg"
        link="https://www.amazon.in/Godfather-Mario-Puzo-ebook/dp/B009GJ870Q/ref=sr_1_3?crid=1J9W2QSZKB970&keywords=the+godfather+book&qid=1672682011&sprefix=the+godfather%2Caps%2C633&sr=8-3"
        download="https://drive.google.com/file/d/1Jl4SwitUKMJyBRrN6d_WY5U5FWbTYybm/view?usp=share_link"
        />
        <Book
        id="7"
        title="Harry Potter"
        by="by "
        author="J.K. Rowling"
        price={199}
        rating={5}  
        image="https://99booksstore.com/uploaded_files/product/464279588.webp"
        link="https://www.amazon.in/Harry-Potter-Philosophers-Stone-Rowling-ebook/dp/B019PIOJYU/ref=sr_1_2?keywords=harry+potter&qid=1672246382&sprefix=harry%2Caps%2C251&sr=8-2"
        download="https://drive.google.com/file/d/19yq-tpfTIg1YkElWvuvNcFHXX8NlQTST/view?usp=share_link"
        />
        <Book
        id="8"
        title="Ikigai"
        by="by "
        author="Rector Garcia"
        price={329}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_3?crid=9VE19PX53KY7&keywords=ikigai&qid=1672246537&sprefix=ikigai%2Caps%2C274&sr=8-3"
        download="https://drive.google.com/file/d/1SkNy7_9t0i15lE8-8Db1HKEKHMg_v8aS/view?usp=share_link"
        />
        
        </div>

        

        <div className="home__row">

        <Book
        id="9"
        title="Something I Never Told You"
        by="by "
        author="Shravya Bhinder"
        price={159}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51Xjv4IzydL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Something-I-Never-Told-You/dp/0143445901/ref=sr_1_5?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-5"
        download="https://drive.google.com/file/d/1hAHUvmH5vDFuJ9DSf2yC5PDHLXBu2NC0/view?usp=share_link"
        />

      <Book
        id="10"
        title="To Kill a Mockingbird"
        by="by "
        author="Harper Lee"
        price={165}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484/ref=sr_1_3?keywords=to+kill+a+mockingbird&qid=1672682182&sprefix=to+kill+a+%2Caps%2C1001&sr=8-3"
        download="https://drive.google.com/file/d/1N1Rvog-_HZJpAS3QAxiFP6RpIQp3I6pd/view?usp=share_link"
        />


        <Book
        id="11"
        title="The Shining"
        by="by "
        author="Stephen King"
        price={230}
        rating={4}  
        image="https://m.media-amazon.com/images/I/41nTTMoaxiL._SX320_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Shining-reissue-STEPHEN-KING/dp/B00RP5OH4S/ref=sr_1_2?keywords=the+shining+by+stephen+king&qid=1672682337&sprefix=the+shinin%2Caps%2C1491&sr=8-2"
        download="https://drive.google.com/file/d/1DKxLpyW-DsbYQ6dSkddIWgRsDDKULbwM/view?usp=share_link"
        />
        <Book
        id="12"
        title="The Psychology of Money"
        by="by "
        author="Morgan Housel"
        price={169}
        rating={5}  
        image="https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_20?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-20"
        download="https://drive.google.com/file/d/1eON81N0iW0UCvDw8pOYTtVSaqD_XvRGg/view?usp=share_link"
        />
       
        
        </div>

        <div className="home__row">

        <Book
        id="13"
        title="Shawshank Redemption"
        by="by "
        author="Frank Darabont"
        price={289}
        rating={5}  
        image="https://m.media-amazon.com/images/I/51ALMvQGyWL._SX369_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Shawshank-Redemption-Shooting-Frank-Darabont/dp/1557042462/ref=sr_1_2?crid=2WJXM5XSBBUAQ&keywords=the+shawshank+redemption+book+by+frank&qid=1672682506&sprefix=the+shawshank+redemption+book+by+frank%2Caps%2C366&sr=8-2"
        download="https://drive.google.com/file/d/1fuHfvGm6NQvunvx6tiNVnNEZp6PAOBmy/view?usp=share_link"
        />

        <Book
        id="14"
        title="You Only Live Once"
        by="by "
        author="Stuti Changle"
        price={141}
        rating={4}  
        image="https://m.media-amazon.com/images/I/413OgI8KzuL._SX322_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_14?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-14"
        download="https://drive.google.com/file/d/1nEb-CSJV8q0TBoKck8vApaPLYQSmbCtw/view?usp=share_link"
        />

      <Book
        id="15"
        title="The Blue Umbrella"
        by="by "
        author="Ruskin Bond"
        price={94}
        rating={4}  
        image="https://m.media-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Blue-Umbrella-Ruskin-Bond/dp/8171673406/ref=sr_1_17?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-17"
        download="https://drive.google.com/file/d/1nk72vBJrYfdTG75xoLF5vdPIWyhHeRt9/view?usp=share_link"
        />


        <Book
        id="16"
        title="The Subtle Art of Not Giving a F*ck"
        by="by "
        author="Mark Manson"
        price={272}
        rating={4}  
        image="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1671895201&sprefix=rich+d%2Caps%2C283&sr=8-3"
        download="https://drive.google.com/file/d/1FklXIESJmlxf0Jjig-mZw9IbmvWRhq7J/view?usp=share_link"
        />
        
        
        </div>

        
        
    </div>
  )
}

export default Home
