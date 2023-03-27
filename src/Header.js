import React, { useState, useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FaSearch,FaBookmark } from 'react-icons/fa'
import { useStateValue } from './StateProvider' 
import Login from './Login'
import { firebaseApp, auth } from './firebase';
import Dropdown from './Dropdown'


function Header() {

  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 0) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 0) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
    })
}, [])

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

        <div className='header__nav'>

        

          
        {currentUser && <>
            <div id='imgDiv'>
              <img id='userImg' src={currentUser.photoURL} /> 
              <p id='greetImg'>Hi!</p>
            </div>

            <p id='userName'>{currentUser.displayName}</p>

            </>}

            <Link to= {!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className='hdrbtn'>{user ? 'Logout' : 'Login'}</span>
              </div>
            </Link>

            <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Genres
            </Link>
            {dropdown && <Dropdown />}
          </li>

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