import React from 'react'
import "./Home.css";
import Book from './Book';
import Carousel from './Carousel';
import { countries } from './Data';
function selfhelp() {
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
        download="https://drive.google.com/file/d/1gIGwFO8hkOtwlbH5Djl2Go-nMHCVs2-x/view?usp=share_link"
        author_link="https://en.wikipedia.org/wiki/Robert_Kiyosaki"
        />
        </div>
        <div className="home__row">
        <Book
        id="2"
        title="Atomic Habits"
        by="by "
        author="James Clear"
        price={430}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?keywords=atomic+habits&qid=1671895226&sprefix=Atomic+%2Caps%2C285&sr=8-1"
        download="https://drive.google.com/file/d/11Ud13Nben9UxvxPNIjH8YX0VG6eeDUjJ/view?usp=share_link"
        author_link="https://jamesclear.com/about"
        />
        </div>

        <div className="home__row">

        <Book
        id="8"
        title="Ikigai"
        by="by "
        author="Hector Garcia"
        price={329}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_3?crid=9VE19PX53KY7&keywords=ikigai&qid=1672246537&sprefix=ikigai%2Caps%2C274&sr=8-3"
        download="https://drive.google.com/file/d/1rq52W4tmtt9dZKacjvCBkJfIn83OJd29/view?usp=share_link"
        author_link="https://hectorgarcia.org/"
        /></div>

        <div className="home__row">
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
        author_link="https://hi-m-wikipedia-org.translate.goog/wiki/%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81%E0%A4%A4%E0%A4%BF_%E0%A4%9A%E0%A4%BE%E0%A4%82%E0%A4%97%E0%A4%B2%E0%A5%87?_x_tr_sl=hi&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc"
        /></div>
        <div className="home__row">
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
            author_link="https://en.wikipedia.org/wiki/Mark_Manson"
            />
        </div>
</div>


  )
}

export default selfhelp