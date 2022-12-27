import React from 'react'
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
        <img className='header__logo' src="https://www.concreteisbetter.com/wp-content/uploads/2019/10/elibrary2.png"
        alt=''
        />
        </Link>

        {/* Search box*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <FaSearch className="header__searchIcon"/>
        </div>

        {/* 3 links */}

        

        <div className='header__nav'>

        <Link to= {!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className='button'>{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>

           <Link to="/" className='header__link'>
            <div className='header__option'>
                <span className='button'>Home</span>
            </div>

           </Link>
           <Link to="/mybooks" className='header__link'>
            <div className='header__option'>
                <span className='button'>MyBooks</span>
            </div>
           </Link>

           <Link to="/about" className='header__link'>
            <div className='header__option'>
                <span className='button'>About</span>
            </div>
           </Link>

           <Link to="/mybooks" className='header__link'>
            <div className='header__optionBookmark'>
                <FaBookmark/>
                <span className='header__Bookcount'>{basket?.length}</span>


            </div>
           </Link>
        </div>

    </nav>
  )
}

export default Header