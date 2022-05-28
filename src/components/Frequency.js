import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Frequency = () => {
    const [someState, setSomeState] = useState({
        firstvalue: "",
        secondvalue: ""
    });
    function handlechange(event) {
        console.log(event.target.value);
        setSomeState({
            ...someState,
            [event.target.name]:event.target.value
        });
      }
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
    
        let a = someState.firstvalue;
        let b = someState.secondvalue;
        let len = a.length;
        let count = 0
       for(let i=0; i<len; i++){
            if(a.charAt(i) === b){
                count = count+1
            }
       }
       setValue(count)
    }
  return (
    <div className='wrapper'>
      <h3>Count character frequency in a string</h3>
        <label>Enter the string: </label>
        <input type= "text" id ="string1" name = "firstvalue" value={someState.firstvalue} onChange={handlechange}/>
        <div className='second'>
        <label>Enter a Character: </label>
        <input type= "text" id ="string2" name = "secondvalue" value={someState.secondvalue} onChange={handlechange}/>
        
        </div>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Frequency