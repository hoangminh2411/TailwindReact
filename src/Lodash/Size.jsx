import React from 'react'

export default function Size() {
    const arr = [
        {id: 1, name: 'iphoneX', price: 1000},
        {id: 2, name: 'iphoneXX', price: 10200},
        {id: 3, name: 'iphoneXXX', price: 13200},
    ];

    console.log('arr size',_size(arr)); // => 3

    const object = {
        id:1, 
        name:'Iphone',
        price: 1000
    }

    console.log('object size',_.size(object));//=>3

  return (
    <div>Size</div>
  )
}
