import React from 'react'
import _ from 'lodash'
// Kiểm tra giá trị có trong mảng hoặc object
export default function IncludeLodash() {

const arr = ['1','2','3'];
console.log(_.includes(arr,'1'));

const object = {id:1,name:'Nguyễn Văn a', age:18};
console.log(_.includes(object,1));




  return (
    <div>
        IncludeLodash
    </div>
  )
}
