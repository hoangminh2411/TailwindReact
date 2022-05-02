import React from 'react'

export default function ResponsiveDemo() {
  return (
    <div className="container mx-auto mt-5 bg-gray-500 w-screen h-screen flex justify-center items-center">
        <button className="sm:bg-red-400 md:bg-green-400 lg:bg-blue-500 p-4 rounded-full shadow-lg">Hello</button>
    </div>
  )
}
