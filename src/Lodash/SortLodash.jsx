import React from 'react'
import _, { result } from 'lodash'


//tương tự như sort bên ES6 tuy nhiên đơn giản hơn
export default function SortLodash() {

    const users = [
        {id:5,name:'Fred',age:48},
        {id:3,name: 'Kaito',age:36},
        {id:3,name: 'Kaito',age:45},
        {id:3,name: 'Kaito',age:37},
        {id:4,name: 'Bake',age:40},
        {id:2,name:'Juld',age:34},
    ]

    const resultSortByAge = _.sortBy(users,[item=>item.age])
    console.log(resultSortByAge);

    const result = _.sortBy(users,['name','age'])

    console.log('result',result);
  return (
    <div>
        SortLodash
    </div>
  )
}
