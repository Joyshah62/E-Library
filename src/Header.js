import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMic, MdOutlineMicOff, MdOutlineImageSearch } from 'react-icons/md'
import { FcProcess } from 'react-icons/fc'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Tesseract from 'tesseract.js';

import { useStateValue } from './StateProvider';
import { firebaseApp, auth } from './firebase';
import Dropdown from './Dropdown'
import "./Header.css"
import "./Books.css"

function Header({ resultWords, setResultWords, searchValue, setSearchValue }) {

  const [processing, setProcessing] = useState(false);
  const [error,setError, imgText] = useState(null);


  const handleCapture = event => {
    setProcessing(true);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {

      Tesseract.recognize(reader.result)
        .then(result => {

          const resultWords = result.data.words.map(word => word.text);
          const filteredResultWords = resultWords.filter(word => word.length > 3 && /^[a-zA-Z]+$/.test(word));
          console.log(filteredResultWords.toString());
          setResultWords(filteredResultWords);
          setProcessing(false);
          // setSearchValue(filteredResultWords[0].toString());
          imgText = filteredResultWords.toString();
        })
        .catch(err => {
          // handle error
          setError(err.message);
          setProcessing(false);
        });
    };
  };


  const handleSearchChange = (event) => {
    setResultWords([""]);
    setProcessing(false);
    setSearchValue(event.target.value);
  };


  const { transcript, resetTranscript, listening } = useSpeechRecognition({
    // lang: 'en-IN',
  });

  const handleVoiceSearch = () => {
    const cleanedTranscript = transcript.replace(/\./g, '');
    console.log(cleanedTranscript);
    setSearchValue(cleanedTranscript);
    resetTranscript();
  };

  const handleToggleListening = () => {
    setResultWords([""]);
    setProcessing(false);
    if (listening) {
      SpeechRecognition.stopListening();
      handleVoiceSearch();
    } else {
      SpeechRecognition.startListening();
    }
  };


  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 0) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
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
    if (user) {
      auth.signOut();
    }
  }


  return (
    <nav className="header">
      <Link to="/">
        <img className='header__logo' src="/images/EduZone Logo.png"
          alt=''
        />
      </Link>

      {/* Search box*/}
      <div id="header__search">

        <input id='searchBar' type='text' value={searchValue} onChange={handleSearchChange} placeholder={"Search by book name..."} required />

        {processing ? <>
          <FcProcess id='cameraIconLoading' size={24} />
        </>
          :
          <>
            <input type="file" onChange={handleCapture} style={{ display: 'none' }} id="camera-input" accept="image/*" />
            <label htmlFor="camera-input">
              <MdOutlineImageSearch id='cameraIcon' size={24} />
            </label>
          </>}

        <button className={'audioIcon'} onClick={handleToggleListening}>
          {listening ? <MdOutlineMic size={20} /> : <MdOutlineMicOff size={20} />}
        </button>

      </div>

      {/* {resultWords.length > 0 && resultWords[0] != "" && (
        <div className="header__result-words">
          <p>Recognized words:</p>
          <ul>
            {resultWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* 3 links */}

      <div className='header__nav'>

        {currentUser && currentUser.providerData.some(provider => provider.providerId === 'google.com') && <>
          <div id='imgDiv'>
            <img id='userImg' src={currentUser.photoURL} alt='' />
            <p id='greetImg'>Hi!</p>
          </div>

          <p id='userName'>{currentUser.displayName.split(' ').splice(0,2).join(' ')}</p>

        </>}

        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className='hdrbtn'>{user ? 'Logout' : 'Login'}</span>
          </div>
        </Link>

        <Link to="/" className='header__link'>
          <div className='header__option'>
            <span className='hdrbtn'>Home</span>
          </div>
        </Link>

        <li
          className='nav-item'
          // onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to='/'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <b
              className='hdrbtn'
              onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            >Genres</b>
          </Link>
          {dropdown && <Dropdown />}
        </li>

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

      </div>

    </nav>
  )
}

export default Header