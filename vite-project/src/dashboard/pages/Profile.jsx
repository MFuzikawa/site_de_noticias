import React from 'react';

const profile = () => {
  return (

    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-5">
      <div className="bg-white p-7 rounded-lg shadow-md flex justify-center items-center border border-gray-200">
        <label
          htmlFor="img"
          className="w-40 h-40 rounded-full text-gray-600 flex flex-col gap-1 justify-center items-center cursor-pointer border-2 border-dashed border-gray-400 hover:border-purple-500 transition-colors duration-200"
        >
          <div className="flex justify-center items-center flex-col gap-y-2">
            <svg
              className="w-10 h-10 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L20 16m-2-6a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="text-lg">Select Image</span>
          </div>
        </label>
        <input className="hidden" type="file" id="img" />
      </div>


      <div className="bg-white p-7 rounded-lg shadow-md text-gray-700 flex flex-col gap-y-3 justify-center items-start border border-gray-200">
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">Name:</span>
          <span>John Doe</span> 
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">E-mail:</span>
          <span>john.doe@example.com</span> 
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">Category:</span>
          <span>Writer</span> 
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 md:col-span-2 border border-gray-200">
        <h2 className="pb-4 text-center text-xl font-semibold text-gray-800 border-b border-gray-200 mb-4">
          Change Password
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mb-3">
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="old-password">
                Old Password
              </label>
              <input
                type="password"
                placeholder="old password"
                name="old-password"
                className="px-4 py-2 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent h-10 transition-all duration-200"
                id="old-password"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="new-password">
                New Password
              </label>
              <input
                type="password"
                placeholder="new password"
                name="new-password"
                className="px-4 py-2 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent h-10 transition-all duration-200"
                id="new-password"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-700 rounded-md text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profile; // Exporting App as the default component
