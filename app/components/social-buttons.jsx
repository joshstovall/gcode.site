'use client'

import Link from "next/link"

export default function SocialButtons() {

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <Link href="https://github.com/joshstovall/gcode.site">
                <button className="bg-gray-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                    Fork on Github
                </button>
            </Link>
        </div>
    )

}