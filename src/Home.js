import React from 'react'
import Carousel from './Carousel';
import { countries } from './Data';
import Book from './Book';
import "./Home.css";

function Home({ searchValue, resultWords }) {

        // const bookMatchesSearchTerm = (bookTitle) =>
        //   bookTitle.toLowerCase().includes(searchTerm.toLowerCase());

        return (
                <div className='home'>

                        {/* product id, title, price, rating, image */}
                        {(resultWords.some(word => "Rich Dad Poor Dad".toLowerCase().includes(word.toLowerCase())) &&
                                "Rich Dad Poor Dad".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                {/* <pre>
                                                        {JSON.stringify(resultWords, null, 2)}
                                                </pre> */}
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
                                )}

                        {(resultWords.some(word => "Atomic Habits".toLowerCase().includes(word.toLowerCase())) &&
                                "Atomic Habits".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {(resultWords.some(word => "The 48 Laws of Power".toLowerCase().includes(word.toLowerCase())) &&
                                "The 48 Laws of Power".toLowerCase().includes(searchValue.toLowerCase())) && (

                                        <div className="home__row">
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
                                                        author_link="https://en.wikipedia.org/wiki/Robert_Greene_(American_author)"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Dark Psychology".toLowerCase().includes(word.toLowerCase())) &&
                                "Dark Psychology".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                                        author_link="https://en.wikipedia.org/wiki/James_Williams"
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

                        {(resultWords.some(word => "Harry Potter".toLowerCase().includes(word.toLowerCase())) &&
                                "Harry Potter".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="7"
                                                        title="Harry Potter"
                                                        by="by "
                                                        author="J.K. Rowling"
                                                        price={199}
                                                        rating={5}
                                                        image="https://99booksstore.com/uploaded_files/product/464279588.webp"
                                                        link="https://www.amazon.in/Harry-Potter-Philosophers-Stone-Rowling-ebook/dp/B019PIOJYU/ref=sr_1_2?keywords=harry+potter&qid=1672246382&sprefix=harry%2Caps%2C251&sr=8-2"
                                                        download="https://drive.google.com/file/d/1HoHdl6CJTkma9DY30-sWNVJdg22optDu/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/J._K._Rowling"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Ikigai".toLowerCase().includes(word.toLowerCase())) &&
                                "Ikigai".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Something I Never Told You".toLowerCase().includes(word.toLowerCase())) &&
                                "Something I Never Told You".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                                        download="https://drive.google.com/file/d/1hAHUvmH5vDFuJ9DSf2yC5PDHLXBu2NC0/view?usp=sharing"
                                                        author_link="https://www.goodreads.com/author/list/14810469.Shravya_Bhinder"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "To Kill a Mockingbird".toLowerCase().includes(word.toLowerCase())) &&
                                "To Kill a Mockingbird".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="10"
                                                        title="To Kill a Mockingbird"
                                                        by="by "
                                                        author="Harper Lee"
                                                        price={165}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg"
                                                        link="https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484/ref=sr_1_3?keywords=to+kill+a+mockingbird&qid=1672682182&sprefix=to+kill+a+%2Caps%2C1001&sr=8-3"
                                                        download="https://drive.google.com/file/d/1x_2WiwejU-FXmEeXOvBuZpLkBaJ-XGxt/view?usp=sharing"
                                                        author_link="https://en.wikipedia.org/wiki/Harper_Lee"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Shining".toLowerCase().includes(word.toLowerCase())) &&
                                "The Shining".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="11"
                                                        title="The Shining"
                                                        by="by "
                                                        author="Stephen King"
                                                        price={230}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/41nTTMoaxiL._SX320_BO1,204,203,200_.jpg"
                                                        link="https://www.amazon.in/Shining-reissue-STEPHEN-KING/dp/B00RP5OH4S/ref=sr_1_2?keywords=the+shining+by+stephen+king&qid=1672682337&sprefix=the+shinin%2Caps%2C1491&sr=8-2"
                                                        download="https://drive.google.com/file/d/1IPHeroUU7nHLbwGIapDrpbbKQ4vmOBNw/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Stephen_King"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Psychology of Money".toLowerCase().includes(word.toLowerCase())) &&
                                "The Psychology of Money".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
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
                                                        author_link="https://www.morganhousel.com/"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Shawshank Redemption".toLowerCase().includes(word.toLowerCase())) &&
                                "Shawshank Redemption".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "You Only Live Once".toLowerCase().includes(word.toLowerCase())) &&
                                "You Only Live Once".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {(resultWords.some(word => "The Subtle Art of Not Giving a F*ck".toLowerCase().includes(word.toLowerCase())) &&
                                "The Subtle Art of Not Giving a F*ck".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                )}

                        {(resultWords.some(word => "The Immortals of Meluha".toLowerCase().includes(word.toLowerCase())) &&
                                "The Immortals of Meluha".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="17"
                                                        title="The Immortals of Meluha"
                                                        by="by "
                                                        author="Amish Tripathi"
                                                        price={220}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/41moQrlKZKL._SX324_BO1,204,203,200_.jpg"
                                                        link="https://www.amazon.in/Immortals-Meluha-Shiva-Trilogy-Book/dp/9356290520"
                                                        download="https://drive.google.com/file/d/1HgpUzCly0mC9-iBYt9XedJXANUjxXVuS/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Amish_Tripathi"
                                                />
                                        </div>
                                )}

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

                        {(resultWords.some(word => "A Storm of Swords".toLowerCase().includes(word.toLowerCase())) &&
                                "A Storm of Swords".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="19"
                                                        title="A Storm of Swords"
                                                        by="by "
                                                        author="George R. R. Martin"
                                                        price={814}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51e6nhYq5TL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link="https://www.amazon.in/Storm-Swords-Song-Fire-Three/dp/055357342X/ref=sr_1_1?keywords=a+storm+of+swords&qid=1674450365&s=books&sprefix=a+storm+o%2Cstripbooks%2C289&sr=1-1"
                                                        download="https://drive.google.com/file/d/15mOhCZmmaRezhmFyu_MI3WEpEd4j4ruo/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/George_R._R._Martin"
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

                        {(resultWords.some(word => "No Country for Old Men".toLowerCase().includes(word.toLowerCase())) &&
                                "No Country for Old Men".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                )}

                        {(resultWords.some(word => "Schindler's List".toLowerCase().includes(word.toLowerCase())) &&
                                "Schindler's List".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Maze Runner".toLowerCase().includes(word.toLowerCase())) &&
                                "The Maze Runner".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                )}

                        {(resultWords.some(word => "V for Vendetta".toLowerCase().includes(word.toLowerCase())) &&
                                "V for Vendetta".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                                )}



                        {(resultWords.some(word => "Habits of Mind".toLowerCase().includes(word.toLowerCase())) &&
                                "Habits of Mind".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="29"
                                                        title="Habits of Mind"
                                                        by="by "
                                                        author="Arthur L Costa"
                                                        price={272}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51zm6HMJOVL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1JDSywd-C_d_Bqwo6ybkFeYlgtEd8CQLM/view?usp=share_link"
                                                        author_link="https://www.google.com/search?q=arthur+l+costa&oq=arthur+l++costa&aqs=chrome..69i57j69i60.5484j0j1&sourceid=chrome&ie=UTF-8"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "What will Improve a Student's memory".toLowerCase().includes(word.toLowerCase())) &&
                                "What will Improve a Student's memory".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="30"
                                                        title="What will Improve a Student's memory"
                                                        by="by "
                                                        author="A.F.T."
                                                        price={272}
                                                        rating={4}
                                                        image="https://lh3.googleusercontent.com/mE_ByHopEVPg5gG0m59tF36RYCBNp2Zr6vl3LoZXFxhRk562va9hSR9NKbLUdf-NdJwW=s85"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1yvGo6DoBpwRM4Prum_u1Bv8ALtEKBlcn/view?usp=share_link"
                                                        author_link="https://www.aft.org/"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "When a Loved One Dies".toLowerCase().includes(word.toLowerCase())) &&
                                "When a Loved One Dies".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="31"
                                                        title="When a Loved One Dies"
                                                        by="by "
                                                        author="Philip W Williams"
                                                        price={272}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51wua3erHlL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/16MwbfBWdLG5DADCuRdiP1rIuO0WAsrJ9/view?usp=share_link"
                                                        author_link="https://www.google.com/search?q=philip+w+williams&sxsrf=APwXEddybxg4XF3Ge2iHST59291iCDguhQ%3A1680005579676&ei=y9kiZNfsKILiseMP9veFkAs&ved=0ahUKEwiX_q--zP79AhUCcWwGHfZ7AbIQ4dUDCA8&uact=5&oq=philip+w+williams&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECAAQHjIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGA0oECEEYAVCeB1ieB2DGOWgBcAB4AIABvAGIAbwBkgEDMC4xmAEAoAEBwAEB&sclient=gws-wiz-serp"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "A Voyage to The Moon".toLowerCase().includes(word.toLowerCase())) &&
                                "A Voyage to The Moon".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="32"
                                                        title="A Voyage to The Moon"
                                                        by="by "
                                                        author="Cyrano de Bergera"
                                                        price={272}
                                                        rating={4}
                                                        image="https://lh3.googleusercontent.com/raTRlgp81yPuwK4pi64CNqLJ-tl8P6JsP4FRG5lSgHajMPpRfaLmNo-ULS4p2CfcmqfLqA=s85"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1PhGQrVGn-h7zeL230ZMCwYHFY8cTD4ix/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Cyrano_de_Bergerac"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Land that Time Forgot".toLowerCase().includes(word.toLowerCase())) &&
                                "The Land that Time Forgot".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="33"
                                                        title="The Land that Time Forgot"
                                                        by="by "
                                                        author="Edgar Rice Burroughs"
                                                        price={272}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/41Zs7qLeLvL._SY298_BO1,204,203,200_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1_LZlqNxlgzDBQ_7TVOz_cRETyzLMUyw8/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Edgar_Rice_Burroughs"
                                                />
                                        </div>
                                )}


                        {(resultWords.some(word => "New Atlantis".toLowerCase().includes(word.toLowerCase())) &&
                                "New Atlantis".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="34"
                                                        title="New Atlantis"
                                                        by="by "
                                                        author="Francis Bacon"
                                                        price={272}
                                                        rating={4}
                                                        image="https://lh3.googleusercontent.com/VswvZHkEPKZCXb7aUF-DV_nKHYl7ZmPogTJlhTbFXqKN7DsIHJDzZVk9eWatjwy2d5nEFg=s85"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1HElZ-0whLs-C4DeUtr9iqM5BHq8ILwm6/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Francis_Bacon"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "In the Days of the Comet".toLowerCase().includes(word.toLowerCase())) &&
                                "In the Days of the Comet".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="35"
                                                        title="In the Days of the Comet"
                                                        by="by "
                                                        author="H. G. Wells"
                                                        price={1515}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51nRSEIxTXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1ybE6Y2whuuwsgMrm1X9aEnpHyGOnD2N6/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/H._G._Wells"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The War of The Worlds".toLowerCase().includes(word.toLowerCase())) &&
                                "The War of The Worlds".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="36"
                                                        title="The War of The Worlds"
                                                        by="by "
                                                        author="H. G. Wells"
                                                        price={149}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/41Z11JTRwQS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1uBe74s8v5u3nabUpKv5fziAfHBWNpHpC/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/H._G._Wells"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Niels Klim's Underground Travels".toLowerCase().includes(word.toLowerCase())) &&
                                "Niels Klim's Underground Travels".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="37"
                                                        title="Niels Klim's Underground Travels"
                                                        by="by "
                                                        author="Ludvig Holberg"
                                                        price={175}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51RnYptN2TL._SY346_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1XzNx3Y_99cuegHalJjwL2tEWl3uJL9Xa/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Ludvig_Holberg"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Blazing World".toLowerCase().includes(word.toLowerCase())) &&
                                "The Blazing World".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="38"
                                                        title="The Blazing World"
                                                        by="by "
                                                        author="Margaret Cavendish"
                                                        price={342}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51Pb9nRvgtL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1w7QyoxQvNu4i5fUK5xIqp6CP2OfGkJow/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Margaret_Cavendish,_Duchess_of_Newcastle-upon-Tyne"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Last Man".toLowerCase().includes(word.toLowerCase())) &&
                                "The Last Man".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="39"
                                                        title="The Last Man"
                                                        by="by "
                                                        author="Mary Shelley"
                                                        price={260}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/51XMZpX-6EL._SX323_BO1,204,203,200_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1I1J3M7aYOGR7qQqWNlnHiSbPJZMgAKg1/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Mary_Shelley"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Frankenstein".toLowerCase().includes(word.toLowerCase())) &&
                                "Frankenstein".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="40"
                                                        title="Frankenstein"
                                                        by="by "
                                                        author="Mary Shelley"
                                                        price={195}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/P/1471141594.01._SCLZZZZZZZ_SX500_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1qqJG6JX9y2j8minU3V5A8V_DmGmsQkFS/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Mary_Shelley"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Strange Case of Dr. Jekyll and Mr. Hyde".toLowerCase().includes(word.toLowerCase())) &&
                                "The Strange Case of Dr. Jekyll and Mr. Hyde".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="41"
                                                        title="The Strange Case of Dr. Jekyll and Mr. Hyde"
                                                        by="by "
                                                        author="Robert Louis Stevenson"
                                                        price={230}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/4128S1v2-4L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1qGpOeKwZXAAIXKJkIM7NxxZNN_ZWBCjp/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Robert_Louis_Stevenson"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Gods Of Mars".toLowerCase().includes(word.toLowerCase())) &&
                                "The Gods Of Mars".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="42"
                                                        title="The Gods Of Mars"
                                                        by="by "
                                                        author="Edgar Rice Burroughs"
                                                        price={1054}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/41fAV9m9naL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1eVnAEO8BqMXraBvrYdUAsRDJTH7RP1jt/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Edgar_Rice_Burroughs"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The Monster Men".toLowerCase().includes(word.toLowerCase())) &&
                                "The Monster Men".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="44"
                                                        title="The Monster Men"
                                                        by="by "
                                                        author="Edgar Rice Burroughs"
                                                        price={272}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/514ttsNGEbL._SY346_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1q5rXI1dacpn8olKCJ6VEsL_BsiDtTUAw/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Edgar_Rice_Burroughs"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "The War in The Air".toLowerCase().includes(word.toLowerCase())) &&
                                "The War in The Air".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="44"
                                                        title="The War in The Air"
                                                        by="by "
                                                        author="H. G. Wells"
                                                        price={1062}
                                                        rating={4}
                                                        image="https://m.media-amazon.com/images/I/41ruYhc6LlL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1sdfFIzHnriA8_2gt3y2kLgn9VSh-jWd5/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/H._G._Wells"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Effective study techniques".toLowerCase().includes(word.toLowerCase())) &&
                                "Effective study techniques".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="25"
                                                        title="Effective study techniques"
                                                        by="by "
                                                        author="University of Otago"
                                                        price={272}
                                                        rating={4}
                                                        image="https://d3tvd1u91rr79.cloudfront.net/eb39c1aa63df4807015794ad65fd00f4/html/bg1.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM3R2ZDF1OTFycjc5LmNsb3VkZnJvbnQubmV0L2ViMzljMWFhNjNkZjQ4MDcwMTU3OTRhZDY1ZmQwMGY0L2h0bWwvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY4MDA3NjYyMH19fV19&Signature=Rs76nbP61DhWPseCPIsZfBWAgc2xrem6ZLIWXazRcak8Xe2L27MYm5ppE0FzvRHQXFD655ENzEZ2nisLVJ0tu7ns0UGnK6WLMoXfFnJrP1Ca9GBPunLa9BZlTN7ygjZIOrWkwGYHFNckcK8Uywj-BJv5Yzg-zA~FYPAIMnYkKJ3J41h8PAEOzUfJB400e43zMJvyUAYrt59yMl3vA3koaxHuZg3phAbiYxlBzsuItDi1kGZZ8TI7l88kigrcUeNcFthwtbsWrFiqmROepRSP43ZeGvUPW-v6-jICoEEFfXR5LCA6aRBR04~pqarYfeLeTQcyei0nCwZqKx3BeC2POw__&Key-Pair-Id=APKAJ535ZH3ZAIIOADHQ"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1V3EaJtK75AHYi_JZvDP_IWIHgb5plpTB/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/University_of_Otago"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Introducing and Evaluating a study smarter not harder".toLowerCase().includes(word.toLowerCase())) &&
                                "Introducing and Evaluating a study smarter not harder".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="26"
                                                        title="Introducing and Evaluating a study smarter not harder"
                                                        by="by "
                                                        author="Tara T Lineweaver"
                                                        price={272}
                                                        rating={4}
                                                        image="https://lh3.googleusercontent.com/ogaDd2ffLdwzbzIpsp8rh0h55sC9TUpF9mLff1d7tIaKSq_5m3aD1snWiWP-Go6M2iVX7M0=s85"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1_4bBzi8jspGcnuAlairuIX1TdRx1qddm/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Tara_T_Lineweaver"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Startegies for Success in Mathematics".toLowerCase().includes(word.toLowerCase())) &&
                                "Startegies for Success in Mathematics".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="27"
                                                        title="Startegies for Success in Mathematics"
                                                        by="by "
                                                        author="Dr Neil Starr"
                                                        price={272}
                                                        rating={4}
                                                        image="https://lh3.googleusercontent.com/1rD5X2hZMyKH0XFjDXpumJPsTIPgfvZ2REIe9LUCI3juFQyNF0gxObYbx8giy8nL-hHD=s85"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1_4fx6YkEsFbVHXmnkhAkCd2dOvtxBQv-/view?usp=share_link"
                                                        author_link="https://www.linkedin.com/in/neil-starr-5068999"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Improve Your Memory".toLowerCase().includes(word.toLowerCase())) &&
                                "Improve Your Memory".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="28"
                                                        title="Improve Your Memory"
                                                        by="by "
                                                        author="The Institute of Water"
                                                        price={272}
                                                        rating={4}
                                                        image="https://lh3.googleusercontent.com/3NC2zLNNUv12Eeu30nqBshoqiO35DziR9jSdzm8VPlcL6hyERNt0p7CRrZgsXohPzARQxA=s85"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1_816rCgUFZnYyogTsb_t3drGsql8SOQM/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/International_Water_Management_Institute"
                                                />
                                        </div>
                                )}

                </div>
        )
}

export default Home
