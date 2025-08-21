import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <div className="w-full max-w-sm mx-auto mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Signin to your PopX account</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-purple-600 text-sm font-semibold mb-1">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-purple-600 text-sm font-semibold mb-1">Password</label>
          <input type="password" id="password" placeholder="Enter password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>
        
        {/* The Link component will navigate to the settings page on successful login */}
        <Link to="/settings" className="w-full">
            <button className="w-full bg-gray-300 text-white py-3 rounded-md font-semibold">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;