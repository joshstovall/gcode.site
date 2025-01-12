'use client'

import React from 'react';

const SliceMetadata = ({ metadata, gcode }) => {
  const handleDownloadGcode = () => {
    if (!gcode) return;
    const blob = new Blob([gcode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'model.gcode';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-2 p-4 absolute bottom-0 right-0">
      <button
        className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full w-[100%]"
        onClick={handleDownloadGcode}
      >
        Download .GCODE
      </button>
      <div className=" bg-gray-800 text-white rounded-lg px-4 py-2 shadow-sm">
        <div className="flex flex-col justify-center items-start space-y-0 text-lg">
          <div className="flex flex-row justify-center items-center space-x-2">
            <span className='w-20 text-right text-gray-300 text-sm'>Filament</span>
            <span className="w-6 text-2xl">🧵</span>
            <span className="w-20 font-bold">{metadata.filamentUsage}</span>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <span className='w-20 text-right text-gray-300 text-sm'>Nozzle</span>
            <span className="w-6 text-2xl rotate-[315deg] translate-y-[-6px] scale-75">📐</span>
            <span className="w-20 font-bold">{metadata.nozzleSize} mm</span>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <span className='w-20 text-right text-gray-300 text-sm'>Time</span>
            <span className="w-6 text-2xl">🕑</span>
            <span className="w-20 font-bold">{metadata.printTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliceMetadata;
