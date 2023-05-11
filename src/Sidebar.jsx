import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Tesseract from 'tesseract.js';
import { MdOutlineMic, MdOutlineMicOff, MdOutlineImageSearch } from 'react-icons/md'
import  {BsInfoSquare} from 'react-icons/bs'

import { FcProcess } from 'react-icons/fc'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics} from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { CiLogin, CiLogout } from "react-icons/ci";

import { useStateValue } from './StateProvider';
import { firebaseApp, auth } from './firebase';
import Header from "./Header";
import './Header.css'

function Sidebar({ resultWords, setResultWords, searchValue, setSearchValue, genre, setGenre }) {

  const [error, setError, imgText] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [open, setOpen] = useState(true);

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

  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    {
      name: currentUser && currentUser.providerData.some(provider => provider.providerId === 'google.com') ?
        currentUser.displayName.split(' ').splice(0, 2).join(' ').toString() :
        "User",
      link: user ? "/" : "/",
      icon: currentUser && currentUser.providerData.some(provider => provider.providerId === 'google.com') ? (
        <>
          <img id='userImg' src={currentUser.photoURL} alt="User" />
        </>
      ) : (
        AiOutlineUser
      )
    },
    {
      name: user ? "Logout" : "Login",
      link: user ? "/" : "/login",
      icon: user ? CiLogout : CiLogin
    },
    // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "Cart", link: "/mybooks", icon: FiShoppingCart, margin: true },
    { name: "About", link: "/about", icon: BsInfoSquare },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line, margin:true },
  ];

  return (
    <section className="gap-6 flex fixed top-0 bottom-0 w-200 z-50 left-0">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">

          {open ?
            <Link to="/">
              <img
                className={`h-20 absolute left-6 -mt-6 ${!open && "duration-500 -translate-x-5"}`}
                src="/images/EduZone favicon.png" alt="logo"
              />
            </Link>
            :
            <></>}

          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
            onClick={() => {
              if (menu.name === "Logout") {
                login();
              }
            }}
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-s-md `}
            >

              {typeof menu?.icon === 'function' || typeof menu?.icon === 'string' ? (
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              ) : (
                <div>
                  <img className='rounded-full h-9 w-9' src={currentUser.photoURL} alt='' />
                </div>
              )}

              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>


              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
