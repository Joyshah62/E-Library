// RegistrationForm.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function NewLogin() {
    const [formData, setFormData] = useState({
        email: '',
        imageSequence: [],
    });

    const [message, setMessage] = useState('');
    const [currentCategory, setCurrentCategory] = useState('animals'); // Default category

    // Define image categories and their respective filenames
    const imageCategories = {
        animals: Array.from({ length: 10 }).map((_, index) => `/images/LoginImg/${index + 1}.png`),
        vehicle: Array.from({ length: 10 }).map((_, index) => `/images/LoginImg/${index + 11}.png`),
        // Add more categories as needed
    };

    // Dynamically generate filenames based on category index
    const categories = ['animals', 'vehicle']; // Add more categories as needed

    const dynamicImageCategories = {};
    categories.forEach((category) => {
        dynamicImageCategories[category] = Array.from({ length: 10 }).map(
            (_, index) => `/images/LoginImg/${index + categories.indexOf(category) * 10 + 1}.png`
        );
    });


    // Merge dynamicImageCategories with imageCategories
    const mergedImageCategories = { ...imageCategories, ...dynamicImageCategories };

    const apiUrl = 'http://localhost:5001'; // Replace with your API URL

    // Function to shuffle an array randomly
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // State to store the shuffled images
    const [shuffledImages, setShuffledImages] = useState(
        shuffleArray(Array.from({ length: 10 }).map((_, index) => index + 1))
    );

    // Periodically shuffle the images every 15 seconds
    useEffect(() => {
        const shuffleInterval = setInterval(() => {
            console.log(mergedImageCategories[currentCategory]); // Add this line
            setShuffledImages(shuffleArray(Array.from({ length: 10 }).map((_, index) => index + 1)));
    
            // Deselect all images when shuffling
            setFormData({
                ...formData,
                imageSequence: [],
            });
        }, 30000);
    
        return () => clearInterval(shuffleInterval);
    }, [shuffledImages, currentCategory]);
    
    const handleImageClick = (imageId) => {
        // If the image is already selected, remove it; otherwise, add it
        const updatedSequence = formData.imageSequence.includes(imageId)
            ? formData.imageSequence.filter((id) => id !== imageId)
            : [...formData.imageSequence, imageId];

        setFormData({
            ...formData,
            imageSequence: updatedSequence,
        });
    };

    const handleAction = async (action) => {
        if (formData.imageSequence.length < 8 || !formData.email) {
            setMessage('Please enter an email and select at least 8 images in order.');
            return;
        }

        try {
            // Determine the API endpoint based on the action (register or login)
            const endpoint = action === 'register' ? '/register' : '/login';

            // Send a request to the appropriate API endpoint
            const response = await axios.post(`${apiUrl}${endpoint}`, {
                username: formData.email,
                image_sequence: formData.imageSequence.join(','), // Convert selected images to a comma-separated string
            });

            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">Register or Login</h2>

            {/* Add category selection */}
            <div className="mb-4">
                <label htmlFor="category" className="block mb-2">
                    Select Image Category:
                </label>
                <select
                    id="category"
                    name="category"
                    value={currentCategory}
                    onChange={(e) => setCurrentCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>

            </div>

            <div>
                <label htmlFor="email" className="block mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
            </div>

            <div className="grid grid-cols-5 gap-4 mt-6">
                {shuffledImages.map((index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        layout // Enable layout animation
                        className={`relative overflow-hidden cursor-pointer ${formData.imageSequence.includes(index) ? 'opacity-50' : ''
                            }`}
                        onClick={() => handleImageClick(index)}
                    >
                        <div
                            className={`absolute inset-0 bg-gray-700 ${formData.imageSequence.includes(index) ? 'opacity-50' : 'hidden'
                                }`}
                        ></div>
                        <img
                            src={mergedImageCategories[currentCategory] && mergedImageCategories[currentCategory][index - 1]}
                            alt={`Image ${index}`}
                            className="w-full h-auto"
                        />
                        {formData.imageSequence.includes(index) && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    {formData.imageSequence.indexOf(index) + 1}
                                </span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-6 flex justify-between">
                <button
                    onClick={() => handleAction('register')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Register
                </button>
                <button
                    onClick={() => handleAction('login')}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                >
                    Login
                </button>
            </div>
            {message && <p className="mt-4 text-red-600">{message}</p>}
        </div>
    );
}

export default NewLogin;
