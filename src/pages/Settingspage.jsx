import React from 'react';

const SettingsPage = () => {
  return (
    <div className="h-screen w-40xl bg-white">
        <div className="bg-white p-4 border-b fixed top-0 left-0 right-0 z-10">
            <h1 className="text-xl font-semibold">Account Settings</h1>
        </div>
        <div className="p-4 mt-16">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <img 
                        className="w-20 h-20 rounded-full" 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Marry Doe" 
                    />
                    <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-bold">Marry Doe</h2>
                    <p className="text-gray-500">Marry@Gmail.Com</p>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-gray-600">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
             <div className="border-t border-dashed my-6"></div>
        </div>
    </div>
  );
};

export default SettingsPage;