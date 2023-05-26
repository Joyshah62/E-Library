import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Tesseract from 'tesseract.js';
import { motion, AnimatePresence } from 'framer-motion';

import { FcProcess } from 'react-icons/fc'
import { MdOutlineMic, MdOutlineMicOff, MdOutlineImageSearch } from 'react-icons/md'

// NOTE: Search with voice is unstable in Ubuntu 23.04

const Searchbar = ({ resultWords, setResultWords, searchValue, setSearchValue, searchBarVisibility }) => {

    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [imgText, setImgText] = useState(null);

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
                    setImgText(filteredResultWords.toString());
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
        setSearchValue("");

        setProcessing(false);
        if (listening) {
            SpeechRecognition.stopListening();
            handleVoiceSearch();
        } else {
            SpeechRecognition.startListening();
        }
    };


    return (
        <>
            <AnimatePresence>

                {!searchBarVisibility &&
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="search-bar top-0 left-0 bg-gray-100 p-4 m-2 flex items-center justify-between rounded-lg shadow-lg"
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue || resultWords}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />

                        {processing ?
                            (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center ml-2"
                                    >
                                        <FcProcess
                                            className="animate-[spin_1s_ease-in-out_infinite] p-0 m-2"
                                            size={24}
                                        />
                                    </motion.div>
                                </>
                            )
                            :
                            (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center ml-2"
                                    >
                                        <input
                                            type="file"
                                            onChange={handleCapture}
                                            className="hidden"
                                            id="camera-input"
                                            accept="image/*"
                                        />
                                        <label
                                            htmlFor="camera-input"
                                            className="cursor-pointer focus:outline-none bg-transparent border-none p-0 m-2"
                                        >
                                            <MdOutlineImageSearch
                                                className=""
                                                size={24}
                                            />
                                        </label>
                                    </motion.div>
                                </>
                            )
                        }

                        <button
                            className="cursor-pointer focus:outline-none bg-transparent border-none p-0 m-2"
                            onClick={handleToggleListening}
                        >
                            {listening ? <MdOutlineMic size={20} /> : <MdOutlineMicOff size={20} />}
                        </button>

                    </motion.div>
                }

            </AnimatePresence>
        </>
    )
}

export default Searchbar;