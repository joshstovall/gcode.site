'use client'

import React from 'react';

const ProgressBar = ({ percent, show }) => {
  return (
    <div
      className="absolute z-10 w-[80%] bg-white bg-opacity-90 justify-center items-center border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-800 dark:border-neutral-700 margin-auto bottom-10 left-1/2 transform -translate-x-1/2"
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className='flex flex-col justify-center items-center space-y-2 mt-20 mb-5'>
        <h1 className='text-2xl font-bold'>Slicing...</h1>
        <p className='text-lg'>Please wait while we slice your files</p>
      </div>
      <div className="w-full  rounded-full mb-10 px-5">
        <div className={`inline-block mb-2 py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500`} style={{ marginLeft: `calc(${percent}% - 1.25rem)` }}>{percent}%</div>
        <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
          <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;