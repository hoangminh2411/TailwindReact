import React from 'react'
import _ from 'lodash'

// hàm này dùng để so sánh 2 mảng

export default function CompareLodash() {
    const arrA = [1,2];
    const arrB = [2,1];
    const result = _.isEqual(arrA.sort(), arrB.sort());
    console.log('result',result);

    const arrObject1 = [{id:1,name:'Khai'},{id:2,name:'Minh'}]
    const arrObject2 = [{id:1,name:'Khai'},{id:2,name:'Minh1'}]
    
    const result2 = _.differenceWith(arrObject1, arrObject2,_.isEqual);
    console.log('result2',result2);

   

  return (
    <div>
        compareLodash
    </div>
  )
}
