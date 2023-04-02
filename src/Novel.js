import React from 'react'
import Book from './Book';
import "./Home.css";

function novel({ searchValue, resultWords }) {
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

      {(resultWords.some(word => "The Silence of The Lambs".toLowerCase().includes(word.toLowerCase())) &&
        "The Silence of The Lambs".toLowerCase().includes(searchValue.toLowerCase())) && (
          <div className="home__row">
            <Book
              id="18"
              title="The Silence of The Lambs"
              by="by "
              author="Thomas Harris"
              price={386}
              rating={4}
              image="https://m.media-amazon.com/images/I/519n1y9Q9kL._SX321_BO1,204,203,200_.jpg"
              link="https://www.amazon.in/Silence-Lambs-Hannibal-Lecter/dp/0099532921/ref=sr_1_1?keywords=the+silence+of+the+lambs+book&qid=1674450019&s=books&sprefix=the+silence+of%2Cstripbooks%2C318&sr=1-1"
              download="https://drive.google.com/file/d/1PQfJG3LS1CzC8Gs75rLIMPcxAkDsAwUZ/view?usp=sharing"
              author_link="https://en.wikipedia.org/wiki/Thomas_Harris"
            />
          </div>
        )}

      {(resultWords.some(word => "It Starts With Us".toLowerCase().includes(word.toLowerCase())) &&
        "It Starts With Us".toLowerCase().includes(searchValue.toLowerCase())) && (
          <div className="home__row">
            <Book
              id="3"
              title="It Starts With Us"
              by="by "
              author="Colleen Hoover"
              price={195}
              rating={4}
              image="https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg"
              link="https://www.amazon.in/Starts-Us-Colleen-Hoover/dp/1398518174/ref=sr_1_2?keywords=it+starts+with+us&qid=1671895261&sprefix=it+%2Caps%2C441&sr=8-2"
              download="https://drive.google.com/file/d/1GyOW8vA3o7Iz-VwJE7dTHlktAi-O5PnH/view?usp=share_link"
              author_link="https://en.wikipedia.org/wiki/Colleen_Hoover"
            />
          </div>
        )}

      {(resultWords.some(word => "The Blue Umbrella".toLowerCase().includes(word.toLowerCase())) &&
        "The Blue Umbrella".toLowerCase().includes(searchValue.toLowerCase())) && (
          <div className="home__row">
            <Book
              id="15"
              title="The Blue Umbrella"
              by="by "
              author="Ruskin Bond"
              price={94}
              rating={4}
              image="https://m.media-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg"
              link="https://www.amazon.in/Blue-Umbrella-Ruskin-Bond/dp/8171673406/ref=sr_1_17?crid=3BFHAR8KJ41SV&keywords=novels&qid=1672239339&sprefix=novel%2Caps%2C847&sr=8-17"
              download="https://drive.google.com/file/d/1ra5VcJqEeRVJ7M6aKiuO1tdk4igZbhO5/view?usp=share_link"
              author_link="https://en.wikipedia.org/wiki/Ruskin_Bond"
            />
          </div>
        )}

      {(resultWords.some(word => "Fight Club".toLowerCase().includes(word.toLowerCase())) &&
        "Fight Club".toLowerCase().includes(searchValue.toLowerCase())) && (
          <div className="home__row">
            <Book
              id="20"
              title="Fight Club"
              by="by "
              author="Chuck Palahniuk"
              price={190}
              rating={4}
              image="https://m.media-amazon.com/images/I/51CbOKu34OL._SX324_BO1,204,203,200_.jpg"
              link="https://www.amazon.in/Fight-Club-Chuck-Palahniuk/dp/0099765217/ref=sr_1_1?keywords=fight+club&qid=1674450594&s=books&sprefix=fight+%2Cstripbooks%2C260&sr=1-1"
              download="https://drive.google.com/file/d/1aML1Up2auLdYo7jtzlQFWO3XgTXDqc50/view?usp=sharing"
              author_link="https://en.wikipedia.org/wiki/Chuck_Palahniuk"
            />
          </div>
        )}

      {(resultWords.some(word => "The Godfather".toLowerCase().includes(word.toLowerCase())) &&
        "The Godfather".toLowerCase().includes(searchValue.toLowerCase())) && (
          <div className="home__row">
            <Book
              id="6"
              title="The Godfather"
              by="by "
              author="Mario Puzo"
              price={1000}
              rating={4}
              image="https://m.media-amazon.com/images/I/41pSXiKR39L.jpg"
              link="https://www.amazon.in/Godfather-Mario-Puzo-ebook/dp/B009GJ870Q/ref=sr_1_3?crid=1J9W2QSZKB970&keywords=the+godfather+book&qid=1672682011&sprefix=the+godfather%2Caps%2C633&sr=8-3"
              download="https://drive.google.com/file/d/1-BfDruoZsnILTCd1kyJhiWa0h8BgpW_o/view?usp=sharing"
              author_link="https://en.wikipedia.org/wiki/Mario_Puzo"
            />
          </div>
        )}

    </div>


  )
}

export default novel