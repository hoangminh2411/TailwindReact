import React from 'react'

export default function PaddingMarginDemo() {
  return (
    <div className="container">
        <div className="mx-2 my-2 ml-2 mr-2 bg-red-300 style={{width: 'auto', margin: 15}}">
            div margin
        </div>
        <div className="px-2 py-2 pl-2 pr-2 bg-red-300 style={{width: 'auto', margin: 15}}">
            div padding
        </div>
    </div>
  )
}
