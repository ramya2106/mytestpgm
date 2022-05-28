import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Factors = () => {
    const[input,setInput] = useState({string: ""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        const num = input
        var numarr = []
        for(let i=1; i<=num; i++){
            if(num%i == 0){
                numarr.push(i)
            }
        }
        setValue(" "+numarr)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
        <h3>Factors of given number</h3>
        <label>Enter the number:</label>
        <input type= "text" id ="string" name ="string" value={setInput.string} onChange={handlechange}/>
        <br/>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Factors