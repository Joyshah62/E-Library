import React from 'react'
import Book from './Book';
import "./Home.css";

function selfhelp({ searchValue, resultWords }) {
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

                        {(resultWords.some(word => "Think and Grow Rich".toLowerCase().includes(word.toLowerCase())) &&
                                "Think and Grow Rich".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="26"
                                                        title="Think and Grow Rich"
                                                        by="by "
                                                        author="Napoleon Hill"
                                                        price={272}
                                                        rating={4}  
                                                        image="https://m.media-amazon.com/images/I/411OtAf040L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1lvVQQ9OlWU4weYYPvJ8YrlefP-yH55gM/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Nepoleon_Hill"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Attitude is Everything".toLowerCase().includes(word.toLowerCase())) &&
                                "Attitude is Everything".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="27"
                                                        title="Attitude is Everything"
                                                        by="by "
                                                        author="Jeff Keller"
                                                        price={272}
                                                        rating={4}  
                                                        image="https://m.media-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1TmRI8RllOEk9I_7Fry4A7H451WdbR-jn/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Jeff_Keller"
                                                />
                                        </div>
                                )}

                        {(resultWords.some(word => "Zen Habits".toLowerCase().includes(word.toLowerCase())) &&
                                "Zen Habits".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                        id="28"
                                                        title="Zen Habits"
                                                        by="by "
                                                        author="Leo Babauta"
                                                        price={272}
                                                        rating={4}  
                                                        image="https://m.media-amazon.com/images/I/31n4HIDxQgL._SY346_.jpg"
                                                        link=""
                                                        download="https://drive.google.com/file/d/1THIiaM2p2VaaK_ZH1jNcdPGVCcwEZqFc/view?usp=share_link"
                                                        author_link="https://en.wikipedia.org/wiki/Leo_Babauta"
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

                        {(resultWords.some(word => "The Power of Subconscious Mind".toLowerCase().includes(word.toLowerCase())) &&
                                "The Power of Subconscious Mind".toLowerCase().includes(searchValue.toLowerCase())) && (
                                        <div className="home__row">
                                                <Book
                                                       id="30"
                                                       title="The Power of Subconscious Mind"
                                                       by="by "
                                                       author="Dr. Joseph Murphy"
                                                       price={272}
                                                       rating={4}  
                                                       image="https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                                                       link=""
                                                       download="https://drive.google.com/file/d/1Q-hEVO-Wa6RhFvmzPJra8aQFKRf351sF/view?usp=share_link"
                                                       author_link="https://en.wikipedia.org/wiki/Joseph_Murphy_(author)"
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



                </div>


        )
}

export default selfhelp