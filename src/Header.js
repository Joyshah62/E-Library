import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FaSearch,FaBookmark } from 'react-icons/fa'
import { useStateValue } from './StateProvider' 
import { auth } from './firebase'
import Login from './Login'

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if(user) {
          auth.signOut();
        }
      }


  return (
    <nav className="header">
        {/*logo on the left -> img */}
        <Link to="/">
        {/* <img className='header__logo' src="https://www.concreteisbetter.com/wp-content/uploads/2019/10/elibrary2.png" */}
        <img className='header__logo' src="/images/ebooklogo.png"
        alt=''
        />
        </Link>

        {/* Search box*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <FaSearch className="header__searchIcon"/>
        </div>

        {/* 3 links */}
        <Link to= {!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className='hdrbtn'>{user ? 'Logout' : 'Login'}</span>
              </div>
            </Link>

        

        <div className='header__nav'>

           <Link to="/" className='header__link'>
            <div className='header__option'>
                <span className='hdrbtn'>Home</span>
            </div>
           </Link>

           <Link to="/about" className='header__link'>
            <div className='header__option'>
                <span className='hdrbtn'>About</span>
            </div>
           </Link>

           <Link to="/mybooks" className='header__link'>
            <div className='header__option'>
                <span className='hdrbtn'>MyBooks</span>
            </div>
           </Link>

            <Link to="/mybooks" className='header__link'>
              <span className='header__Bookcount'>{basket?.length}</span>
            </Link>

            {/* <Link to= {!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className=''>{user ? <img className="userimg" src='images/UserIcon.png'></img> : <img className="userimg" src='images/UserIcon2.png'></img> }</span>
              </div>
            </Link> */}

            {/* <Link to= {!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className='hdrbtn'>{user ? 'Logout' : 'Login'}</span>
              </div>
            </Link> */}
           
           
           {/* <Link to="/mybooks" className='header__link'>
            <div className='header__optionBookmark'>
                {/* <FaBookmark/>
                <span className='header__Bookcount'>{basket?.length}</span> 


            </div>
           </Link> */}

        </div>

    </nav>
  )
}

export default Header