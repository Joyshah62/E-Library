import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios";

const Admin = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookId, setBookId] = useState('');

  const handleAddClick = () => {
    setShowAddDialog(true);
  };

  const handleEditClick = () => {
    setShowEditDialog(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCloseClick = () => {
    setShowAddDialog(false);
    setShowEditDialog(false);
    setShowDeleteDialog(false);
    setBookName('');
    setAuthorName('');
    setBookId('');
  };

  const handleAddBook = () => {
    // Handle adding the book (you can implement this as per your application's logic)
    console.log('Adding book:', { bookName, authorName });
    handleCloseClick();
  };

  const handleEditBook = () => {
    // Handle editing the book (you can implement this as per your application's logic)
    console.log('Editing book:', { bookName, authorName });
    handleCloseClick();
  };

  // const handleDeleteBook = () => {
  //   // Handle deleting the book (you can implement this as per your application's logic)
  //   console.log('Deleting book with ID:', bookId);
  //   handleCloseClick();
  // };

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
          onClick={handleEditClick}
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
                <h2 className="text-lg font-semibold mb-4">Add New Book</h2>
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

      {/* Edit Dialog Box */}
      <AnimatePresence>
        {showEditDialog && (
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
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 rounded bg-gray-400 text-white font-semibold shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleCloseClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-blue-500 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-110"
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
