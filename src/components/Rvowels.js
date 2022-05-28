import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Rvowels = () => {
    const[input,setInput] = useState({string:""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        const str = input
        const newStr = str.replace(/[aeiou]/gi, '');
        setValue(newStr)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
      <h3>Remove the vowels from the given string</h3>
        <label>Enter the string:</label>
        <input type= "text" id ="string" name="string" value={setInput.string} onChange={handlechange}/>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Rvowels