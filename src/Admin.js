import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios";

const Admin = () => {

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditIdDialog, setShowEditIdDialog] = useState(false);
  const [showEditDataDialog, setShowEditDataDialog] = useState(false);

  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [authorLink, setAuthorLink] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleEditIdClick = () => {
    setShowEditIdDialog(true);
  };

  const handleAddClick = () => {
    setShowAddDialog(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCloseClick = () => {
    setShowEditDataDialog(false);
    setShowAddDialog(false);
    // setShowEditDialog(false);
    setShowDeleteDialog(false);
    setShowEditIdDialog(false)

    setBookId('');
    setBookName('');
    setAuthorName('');
    setPrice('');
    setRating('');
    setImage("");
    setAuthorLink("");
    setSelectedGenres([]);
  };

  const handleAddBook = async () => {
    // Handle adding the book (you can implement this as per your application's logic)
    console.log('Adding book:', { bookName, authorName });

    try {
      const newBook = {
        id: bookId,
        title: bookName,
        author: authorName,
        price: price,
        rating: rating,
        image: image,
        author_link: authorLink,
        genre: selectedGenres,
      };

      const response = await axios.post(`http://127.0.0.1:5000/add`, newBook);

      if (response.status === 201) {
        alert(response.data.message);
      } else {
        alert('Book addition failed.');
        console.log(response.data.message);
      }

      setShowEditDataDialog(false);
    } catch (error) {
      console.error('Error adding the book:', error);
      alert('An error occurred while adding the book.');
    }

    handleCloseClick();
  };


  const handleEditIdSubmit = () => {
    setShowEditIdDialog(false);
    handleEditDataClick();
  };

  const handleEditBook = async () => {
    try {
      const editedBook = {
        id: bookId,
        title: bookName,
        author: authorName,
        price: price,
        rating: rating,
        image: image,
        author_link: authorLink,
        genre: selectedGenres,
      };

      const response = await axios.put(`http://127.0.0.1:5000/update/${bookId}`, editedBook);

      if (response.status === 200) {
        alert(response.data.message);
      } else {
        alert('Book update failed.');
      }

      setShowEditDataDialog(false);
    } catch (error) {
      console.error('Error updating the book:', error);
      alert('An error occurred while updating the book.');
      setShowEditDataDialog(false);
    }
  };

  const handleEditDataClick = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/${bookId}`);
      const bookData = response.data;

      if (bookData) {
        // Fetch successful, populate the input fields with the book data
        setBookName(bookData.title);
        setAuthorName(bookData.author);
        setPrice(bookData.price);
        setRating(bookData.rating);
        setImage(bookData.image);
        setAuthorLink(bookData.author_link);

        setSelectedGenres(bookData.genre);


        setShowEditDataDialog(true);
      } else {
        alert('Book not found. Please enter a valid ID.');
      }
    } catch (error) {
      console.error('Error fetching the book:', error);
      alert('An error occurred while fetching the book data.');
    }
  };

  const handleGenreButtonClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      // Genre already selected, remove it from the array
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      // Genre not selected, add it to the array
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleDeleteBook = async () => {
    try {
      const response = await axios.delete(`http://127.0.0.1:5000/remove/${bookId}`);

      if (response.status === 200) {
        alert(response.data.message);
      } else {
        alert("Book deletion failed.");
      }

      setShowDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting the book:", error);
      alert("An error occurred while deleting the book.");
      setShowDeleteDialog(false);
    }
  };

  return (
    <div className="items-center justify-center h-screen">
      <div className="space-y-4">

        {/* Add Button */}
        <button
          className="m-5 px-6 py-2 rounded-full bg-blue-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          onClick={handleAddClick}
        >
          Add
        </button>

        {/* Edit Button */}
        <button
          className="m-5 px-6 py-2 rounded-full bg-yellow-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          onClick={handleEditIdClick}
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          className="m-5 px-6 py-2 rounded-full bg-red-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>

      {/* Add Dialog Box */}
      <AnimatePresence>
        {showAddDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg p-3"
            >
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-lg font-semibold mb-4">Edit Book</h2>
                <input
                  type="text"
                  placeholder="Book Name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Author Name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="number"
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => setRating(parseFloat(e.target.value))}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Author Link"
                  value={authorLink}
                  onChange={(e) => setAuthorLink(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />

                <div className="mb-4">
                  <p className="font-semibold">Select Genre:</p>
                  <div className="flex">
                    {/* Genre buttons... */}
                    <button
                      className={`${selectedGenres.includes('thriller') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('thriller')}
                    >
                      Thriller
                    </button>
                    <button
                      className={`${selectedGenres.includes('self-help') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('self-help')}
                    >
                      Self-help
                    </button>
                    <button
                      className={`${selectedGenres.includes('fiction') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('fiction')}
                    >
                      Fiction
                    </button>
                    <button
                      className={`${selectedGenres.includes('novel') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('novel')}
                    >
                      Novel
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-400 text-white font-semibold shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleCloseClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-green-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleAddBook}
                  >
                    Add Book
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Data Dialog Box */}
      <AnimatePresence>
        {showEditDataDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg p-3"
            >
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-lg font-semibold mb-4">Edit Book</h2>
                <input
                  type="text"
                  placeholder="Book Name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Author Name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="number"
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => setRating(parseFloat(e.target.value))}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Author Link"
                  value={authorLink}
                  onChange={(e) => setAuthorLink(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />

                <div className="mb-4">
                  <p className="font-semibold">Select Genre:</p>
                  <div className="flex">
                    {/* Genre buttons... */}
                    <button
                      className={`${selectedGenres.includes('thriller') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('thriller')}
                    >
                      Thriller
                    </button>
                    <button
                      className={`${selectedGenres.includes('self-help') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('self-help')}
                    >
                      Self-help
                    </button>
                    <button
                      className={`${selectedGenres.includes('fiction') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('fiction')}
                    >
                      Fiction
                    </button>
                    <button
                      className={`${selectedGenres.includes('novel') ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                        } px-4 py-2 rounded mr-2`}
                      onClick={() => handleGenreButtonClick('novel')}
                    >
                      Novel
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-400 text-white font-semibold shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleCloseClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-yellow-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleEditBook}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit ID Dialog Box */}
      <AnimatePresence>
        {showEditIdDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg p-3"
            >
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-lg font-semibold mb-4">Edit Book</h2>
                <input
                  type="text"
                  placeholder="Book ID"
                  value={bookId}
                  onChange={(e) => setBookId(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-400 text-white font-semibold shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleCloseClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-yellow-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleEditIdSubmit}
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Dialog Box */}
      <AnimatePresence>
        {showDeleteDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg p-3"
            >
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-lg font-semibold mb-4">Delete Book</h2>
                <input
                  type="text"
                  placeholder="Book ID"
                  value={bookId}
                  onChange={(e) => setBookId(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                <p className="mb-4">Are you sure you want to delete this book?</p>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-400 text-white font-semibold shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleCloseClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-red-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleDeleteBook}
                  >
                    Delete Book
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
