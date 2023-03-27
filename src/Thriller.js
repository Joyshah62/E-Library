import React from 'react'
import "./Home.css";
import Book from './Book';
import Carousel from './Carousel';
import { countries } from './Data';
function thriller() {
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
        /></div>
        
        <div className="home__row">
        <Book
        id="22"
        title="Schindler's List"
        by="by "
        author="Thomas Keneally"
        price={190}
        rating={4}  
        image="https://m.media-amazon.com/images/I/416HJgbykrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        link="https://www.amazon.in/Schindlers-List-Thomas-Keneally/dp/1982151048/ref=sr_1_3?crid=U96SHJXZ2P8&keywords=schindler+list&qid=1674994514&s=books&sprefix=schiendler+list%2Cstripbooks%2C312&sr=1-3"
        download="https://drive.google.com/file/d/17ViwqeWT0DdJsTUm7ryeLy6cW_AbwoCb/view?usp=sharing"
        author_link="https://en.wikipedia.org/wiki/Thomas_Keneally"
        /></div>

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
        download="https://drive.google.com/file/d/1exbzl-2GBsWaVD3wADu2TMYmTW8VDymv/view?usp=sharing"
        author_link="https://en.wikipedia.org/wiki/Frank_Darabont"
        /></div>

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
        /></div>

<div className="home__row">
        <Book
        id="21"
        title="No Country for Old Men"
        by="by "
        author="Cormac McCarthy"
        price={190}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51U6-kcsIUL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        link="https://www.amazon.in/Country-Old-Men-Vintage-International/dp/0375706674"
        download="https://drive.google.com/file/d/1R7dIjIC7tRPC8_1NmZ2c01PuEBr1jZdc/view?usp=sharing"
        author_link="https://en.wikipedia.org/wiki/Cormac_McCarthy"
        />
        </div>

        <div className="home__row">
        <Book
        id="24"
        title="V for Vendetta"
        by="by "
        author="Alan Moore"
        price={2167}
        rating={4}  
        image="https://m.media-amazon.com/images/I/41jW+y-RCuL._SX351_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/V-Vendetta-30th-Anniversary-Deluxe/dp/1401285007/ref=sr_1_2?keywords=v+for+vendetta&qid=1674995571&sprefix=v+for+vende%2Caps%2C267&sr=8-2"
        download="https://drive.google.com/file/d/1VKelLG6d44o0kk19pzqOzCfFyf_6R3L7/view?usp=sharing"
        author_link="https://en.wikipedia.org/wiki/Alan_Moore"
        />
        </div>
        <div className="home__row">
        <Book
        id="23"
        title="The Maze Runner"
        by="by "
        author="James Dashner"
        price={190}
        rating={4}  
        image="https://m.media-amazon.com/images/I/51JZHD0ac2L._SX325_BO1,204,203,200_.jpg"
        link="https://www.amazon.in/Maze-Runner-James-Dashner/dp/9351033139/ref=sr_1_3?crid=2C3ZO9XB1ZZYM&keywords=maze+runner&qid=1674995066&s=books&sprefix=maze+runner%2Cstripbooks%2C415&sr=1-3"
        download="https://drive.google.com/file/d/1jy75PBk65NtQMLe3fVkAVFo3NHFSl8zo/view?usp=share_link"
        author_link="https://en.wikipedia.org/wiki/James_Dashner"
        />
        </div>

</div>


  )
}

export default thriller