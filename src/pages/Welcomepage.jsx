import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-end p-6">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/register">
          <button className="w-full bg-purple-600 text-white py-3 rounded-md mb-3 font-semibold">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-purple-200 text-purple-800 py-3 rounded-md font-semibold">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;