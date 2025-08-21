import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <div className="w-full max-w-sm mx-auto mt-10 flex flex-col h-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create your PopX account</h1>
        
        <div className="space-y-4 mt-6 flex-grow">
          <div>
            <label htmlFor="fullName" className="block text-purple-600 text-sm font-semibold -mb-1 relative top-2.5 ml-3 bg-white w-fit px-1">Full Name<span className="text-red-500">*</span></label>
            <input type="text" id="fullName" placeholder="Marry Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-purple-600 text-sm font-semibold -mb-1 relative top-2.5 ml-3 bg-white w-fit px-1">Phone number<span className="text-red-500">*</span></label>
            <input type="tel" id="phoneNumber" placeholder="Marry Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div>
            <label htmlFor="emailAddress" className="block text-purple-600 text-sm font-semibold -mb-1 relative top-2.5 ml-3 bg-white w-fit px-1">Email address<span className="text-red-500">*</span></label>
            <input type="email" id="emailAddress" placeholder="Marry Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div>
            <label htmlFor="password" className="block text-purple-600 text-sm font-semibold -mb-1 relative top-2.5 ml-3 bg-white w-fit px-1">Password<span className="text-red-500">*</span></label>
            <input type="password" id="password" placeholder="Marry Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-purple-600 text-sm font-semibold -mb-1 relative top-2.5 ml-3 bg-white w-fit px-1">Company name</label>
            <input type="text" id="companyName" placeholder="Marry Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="agency" className="form-radio h-5 w-5 text-purple-600" checked/>
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="agency" className="form-radio h-5 w-5 text-purple-600" />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-6">
          <Link to="/settings">
             <button className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold">Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;