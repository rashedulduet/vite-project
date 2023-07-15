import React from 'react'
import { useRef } from 'react'

export default function Useref() {
    let fname,lname,fullName=useRef()
    const rashedul=()=>{
       let fastName= fname.value;  
       let lastName= lname.value;  
       fullName.innerHTML=`${fastName} ${lastName}`
    }
  return (
    <div>
        <input type="text" placeholder='this is first name' ref={(a)=>fname=a} />
        <input type="text" placeholder='this is last name' ref={(b)=>lname=b}/>
        <p ref={(c)=>fullName=c}></p>
      <button onClick={rashedul}>click</button>
    </div>
  )
}
