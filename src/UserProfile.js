import React from 'react';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    occupation: 'Software Engineer',
    description: 'Passionate about coding and building amazing web applications.',
    profilePhoto: 'https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo=',
    bannerPhoto: 'https://static.toiimg.com/thumb/msid-31346158,width-748,height-499,resizemode=4,imgsize-114461/.jpg',
  };

  const handleLogout = () => {
    // Implement logout functionality here
    // For example, redirect to a logout page or clear authentication tokens.
  };

  return (
    <div>
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${user.bannerPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
        }}
      />
        {/* Profile Photo */}
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src={user.profilePhoto}
          alt="Profile"
          style={{ width: '150px', height: '150px', borderRadius: '50%', position: 'relative'}}
          className="-mt-[60px] ml-3"
        />

      {/* User Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="p-4"
      >
        <div className="mb-4 ">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.occupation}</p>
        </div>
        <p className="text-gray-700 mt-2">{user.description}</p>
      </motion.div>

      {/* Logout Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
      >
        Logout
      </motion.button>
    </div>
  );
};

export default UserProfile;
