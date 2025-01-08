'use client'

import LoginButtons from './login-buttons';
import SocialButtons from './social-buttons';

export default function StartMode({
  url,
  setUrl,
  loading,
  setLoading,
  loaded,
  setLoaded,
  progress,
  setProgress,
  mode,
  setMode,
  file,
  setFile
}) {

  return (
    <div className='absolute h-screen z-10 pointer-events-none w-screen'>
      <div className="left-0 top-0 mt-24 z-10  w-full max-w-3xl mx-auto text-white">
        <h1 className="text-2xl sm:text-4xl md:text-7xl text-center font-black italic tracking-tight">
          Open G-Code Slicer
        </h1>
        <p className="left-0 top-0 text-lg sm:text-2xl md:text-4xl font-light text-center tracking-tight">
          Open Source Slicer
        </p>
      </div>
      <div className="z-10 absolute mt-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        {
          !loading && !loaded && <div className='flex flex-row justify-center mb-16'>
            <div className='cursor-pointer bg-blue-600 hover:bg-sky-200 text-white hover:text-black text-2xl font-bold py-4 px-8 rounded-lg'
              onClick={
                () => document.getElementById('file_button').click()
              }>
              📂 &nbsp; &nbsp; Open .STL File
            </div>
            <input
              id="file_button"
              className='hidden'
              type="file"
              onChange={(event) => {
                if (event.target.files && event.target.files[0]) {
                  const file = event.target.files[0];
                  setFile(file);
                  setMode('edit');
                  let stl_url = URL.createObjectURL(event.target.files[0]);
                  setUrl(stl_url);
                }
              }}
            />
          </div>
        }
        {!loading && !loaded && (
          <div>
            {/* <LoginButtons /> */}
            <SocialButtons />
          </div>
        )}

      </div>
    </div>

  )


}