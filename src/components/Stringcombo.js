import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Stringcombo = () => {
    const[input,setInput] = useState({string: ""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        const str = input
        var combination = []
        for(let i=0; i<str.length; i++){
            for(let j=i+1; j<(str.length+1); j++){
                combination.push(str.slice(i,j))
            }
        }
        setValue(" "+combination)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
        <h3>Print name in all possible combination</h3>
        <label>Enter the string:</label>
        <input type= "text" id ="string" name = "string" value={setInput.string} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Stringcombo