import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Prime = () => {
    const[input,setInput] = useState({string:""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        let str = input;
        
        if(str > 1) {
            for(let i=2; i<str; i++){
                if(str%i === 0){
                   setValue("Entered number is not a Prime number");
                   break;
                } else {
                    setValue("Entered number is a Prime number");
                }
            }
        } else {
            setValue("Please enter the number greater than 1")
        }
        
        //setValue(count)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
        <h3>Prime number or not</h3>
        <label>Enter the Number greater than 1:</label>
        <input type= "text" id ="string" name = "string" value={setInput.string} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Prime