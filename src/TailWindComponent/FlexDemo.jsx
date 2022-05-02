import React from 'react'

export default function FlexDemo() {
  return (
    <div className="w-screen h-screen bg-purple-300">
        <div className="flex justify-center items-center flex-wrap h-1/2 w-full bg-emerald-300">
            <div className="fItem h-10 w-10 bg-green-400">1</div>
            <div className="fItem h-10 w-10 bg-green-500">2</div>
            <div className="fItem h-10 w-10 bg-green-600">3</div>
            <div className="fItem h-10 w-10 bg-green-700">4</div>
        </div>
    </div>
  )
}
