'use client'

export default function SliceButton({ sliceCallback, slicing }) {

  return (
    <div className="p-4 absolute bottom-0 w-screen z-10">
      <div className="flex flex-row justify-center items-center space-x-0">
        <button
          disabled={slicing}
          className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-6 rounded-lg"
          onClick={sliceCallback}
        >
          {
            slicing
              ? 'Slicing...'
              : 'Slice Now'
          }
        </button>
      </div>
    </div>
  )

}