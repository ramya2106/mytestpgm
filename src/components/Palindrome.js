import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Palindrome = () => {
    const[input,setInput] = useState({string:""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        let str = input;
        let sum = 0;

        while(str > 0){
            let  rem = str%10;
            sum = (sum*10)+rem;
            str = Math.floor(str/10);
        }
        setValue(sum)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
        <h3>Palindrome for a given number</h3>
        <label>Enter the three digit number:</label>
        <input type= "text" id ="string" name="string" value={setInput.string} onChange={handlechange}/>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Palindrome