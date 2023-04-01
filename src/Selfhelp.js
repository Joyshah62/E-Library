import React from 'react'
import Book from './Book';
import Carousel from './Carousel';
import { countries } from './Data';
import "./Home.css";

function selfhelp({ searchValue }) {
        return (
                <div className='home'>

                        {/* product id, title, price, rating, image */}

                        {("Rich Dad Poor Dad".toLowerCase().includes(searchValue.toLowerCase())) && (
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
                        )}

                        {("Atomic Habits".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("Ikigai".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("You Only Live Once".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("The Subtle Art of Not Giving a F*ck".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("Effective study techniques".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("Introducing and Evaluating a study smarter not harder".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("Startegies for Success in Mathematics".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("Improve Your Memory".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("Habits of Mind".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("What will Improve a Student's memory".toLowerCase().includes(searchValue.toLowerCase())) && (
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

                        {("When a Loved One Dies".toLowerCase().includes(searchValue.toLowerCase())) && (
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