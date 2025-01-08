'use client'

export default function SocialButtons() {

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <button className="bg-gray-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                Fork on Github
            </button>
            {/* <button className="bg-gray-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">Join the Discord</button> */}
        </div>
    )

}