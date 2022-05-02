import React from 'react'
import _ from 'lodash'
// Fill dùng để chèn phần tử vòa vị trí chỉ định trong mãng hoặc object
export default function FillLodash() {
    var arr = [
        { id: 1, name: 'Iphone' },
        { id: 2, name: 'Iphone X' },
        { id: 3, name: 'Iphone S' }
    ]

    const result = _.fill(arr, { id: 5, name: "Samsung galaxy note 10 plus" }, 1,2)
    console.log(result);
    return (
        <div>FillLodash</div>
    )
}
