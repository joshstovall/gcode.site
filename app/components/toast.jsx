'use client'

import { FaExclamation } from "react-icons/fa";

export default function ToastTop() {

  return (
    <div className="absolute ">
      <div className="bg-rose-700 text-white rounded-lg px-4 py-2 m-2 shadow-sm">
        <div className="flex flex-row justify-center items-center space-x-2">
          <FaExclamation className="text-2xl" />
          <p className=" text-center font-semibold" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, hic? 
            Laudantium ipsa autem sit dolore asperiores dolores dicta aliquid iste sint, quae possimus saepe!
          </p>
        </div>
      </div>
    </div>

  )

}