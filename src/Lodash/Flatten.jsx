import React from 'react'
import _ from 'lodash'

//_.flatten(array) là hàm dùng để phân tách các mảng trong mảng 1 cấp
//_.flattenDeep(array): là hàm dùng để phân tách tất cả các mảng trong mảng nhiều cấp

export default function Flatten() {
    const arr = [[1,[2,[3,[4]]],[5]]]

    const resultFlatten = _.flatten(arr);
    const resultFlattenDeep = _.flattenDeep(arr);

    console.log('resultFlatten',resultFlatten);
    console.log('resultFlattenDeep',resultFlattenDeep);
  return (
    <div>Flatten</div>
  )
}
