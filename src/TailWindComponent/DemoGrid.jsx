import React from 'react'

export default function DemoGrid() {
  return (
    <div className="container">
        <div className="grid grid-cols-8 ">
            <div className="bg-red-400">1</div>
            <div className="bg-yellow-400">2</div>
            <div className="bg-pink-400">3</div>
            <div className="bg-red-400">4</div>
            <div className="bg-gray-400">5</div>
            <div className="bg-gray-400">6</div>
            <div className="bg-red-400">7</div>
            <div className="bg-red-600">8</div>
        </div>
    </div>
  )
}
