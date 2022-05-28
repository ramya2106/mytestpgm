import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Fibonacci = () => {
    const[input,setInput] = useState({string:""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        let str = parseInt(input);
        var x;
        for(var fibArray = [0,1], i=0,j=1,k=0; k<(str-2);i=j,j=x,k++ ){
            x=i+j;
            fibArray.push(x);
        }
       
        setValue(" "+fibArray)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
        <h3>Fibonacci Series</h3>
        <label>Enter the nummber of terms:</label>
        <input type= "text" id ="string" name = "string" value={setInput.string} onChange={handlechange}/>
        <br/>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Fibonacci