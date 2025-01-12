'use client'

import React from 'react';
import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const StlMetadata = ({ filename }) => {

  return (

    <div className="p-4 absolute z-10 top-0 left-0 flex flex-col justify-center items-start space-y-0 bg-gray-800 rounded-lg px-2 py-1 pr-10 m-2 shadow-sm">
      <button className="hover:bg-gray-300 text-gray-600 py-2 px-2 rounded-lg absolute top-0 right-0">
        <FaTimes className="text-xl" />
      </button>
      <span className="text-2xl text-white">
        {filename}
      </span>
      <p className="text-lg text-white flex flex-row justify-center items-center space-x-1">
        <span className='font-bold'>20</span>
        <span className='text-sm'>mm</span>
        <LiaTimesSolid className="text-sm" />
        <span className='font-bold'>20</span>
        <span className='text-sm'>mm</span>
        <LiaTimesSolid className="text-sm" />
        <span className='font-bold'>20</span>
        <span className='text-sm'>mm</span>
      </p>
    </div>

  );
};

export default StlMetadata;
