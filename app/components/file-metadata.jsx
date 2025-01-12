'use client'

import React from 'react';
import { FaCube } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const FileMetadata = ({ metadata }) => {
  const size = metadata.size || [0, 0, 0];

  return (
    <div className="p-4 absolute bottom-0 left-0">
      <div className="flex flex-col justify-center items-start space-y-0">
        <span className="text-2xl">
          {metadata.filename}
        </span>
        <p className="text-lg flex flex-row justify-center items-center space-x-1">
          <span className='font-bold'>{size[0].toFixed(2)}</span>
          <span className='text-sm'>mm</span>
          <LiaTimesSolid className="text-sm" />
          <span className='font-bold'>{size[1].toFixed(2)}</span>
          <span className='text-sm'>mm</span>
          <LiaTimesSolid className="text-sm" />
          <span className='font-bold'>{size[2].toFixed(2)}</span>
          <span className='text-sm'>mm</span>
        </p>
        <div className="flex flex-row justify-center items-center space-x-0">
          <button className="hover:bg-blue-300 text-gray-500 font-bold py-2 px-2 rounded-lg">
            <FaCube className="text-xl" />
          </button>
          <button className="hover:bg-blue-300 text-gray-500 font-bold py-2 px-2 rounded-lg">
            <FaCube className="text-xl" />
          </button>
          <button className="hover:bg-blue-300 text-gray-500 font-bold py-2 px-2 rounded-lg">
            <FaCube className="text-xl" />
          </button>
          <button className="hover:bg-blue-300 text-gray-500 font-bold py-2 px-2 rounded-lg">
            <FaCube className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileMetadata;
