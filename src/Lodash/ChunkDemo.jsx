import React from 'react'
import _ from 'lodash'
// Chunk dùng để tách mãng ra mãng mới với số lượng phần tử mong muốn
export default function ChunkDemo() {
    const arr = ['id',1,'name','Khai','info','cybersoft']
    const result = _.chunk(arr,2);
    console.log(result);

    const arrString = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13"];

    const result2  = _.chunk(arrString,3);
    console.log(result2);

  return (
    <div>
        ChunkDemo
    </div>
  )
}

