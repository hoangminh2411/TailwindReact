import React from 'react'
import _ from 'lodash'


export default function LastFirstLodash() {

const arrStudent = [
    {id:1,name: 'Peter'},
    {id:2,name: 'Barry'},
    {id:3,name: 'Iris'}
]

const FirstItem = _.first(arrStudent).name
const LasttItem = _.last(arrStudent).name


const arr = [['001','Alice'], ['002','Bob'], ['003','Bob']]
const [id , name] = _.first(arr);
const [id2 , name2] = _.last(arr);


  return (
    <div className="container">
        <div>FirstItem: {FirstItem}</div>
        <div>LastItem: {LasttItem}</div>

        <hr/>

        <div>FirstItem: {id}-{name}</div>
        <div>LastItem: {id2}-{name2} </div>
    </div>
  )
}
