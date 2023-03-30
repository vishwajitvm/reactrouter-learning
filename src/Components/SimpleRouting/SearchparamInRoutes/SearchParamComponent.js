import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchParamComponent() {
    const [getParams , setParams] = useSearchParams() ;
    const age = getParams.get('age')
    const name = getParams.get('name')
    const text = getParams.get('text')
  return (
    <div>
      <h1>Filter Age and name from URL params</h1>
      <h3>Name: { name != null?name:"No name" }</h3>
      <h3>Age: { age != null?age:"No age" }</h3>
      <h3>Text: { text != null?text:"No text" }</h3>

      <input type="text" placeholder='Inset somthing' onChange={(e)=>setParams({text:e.target.value})  } />
      <button onClick={()=>setParams({age:30 , name:'shivani'})} >Set new age and name in URL</button>
    </div>
  )
}
