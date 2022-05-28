import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Cvowels = () => {
    const[input,setInput] = useState({string: ""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        const str = input
        const newStr = str.match(/[aeiou]/gi).length;
        setValue(newStr)
    }
    function handlechange(event){
    setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
      <h3>Counts the vowels in the string</h3>
        <label>Enter the string:</label>
        <input type= "text" id ="string" name="string" value={setInput.string} onChange={handlechange}/>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Cvowels