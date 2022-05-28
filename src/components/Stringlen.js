import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Stringlen = () => {
    const[input,setInput] = useState({string:""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        let str = input;
        let count = str.length;
        setValue(count)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
      <h3>Number of words in string</h3>
        <label>Enter the String:</label>
        <input type= "text" id ="string" name="sttring" value={setInput.string} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Stringlen