import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Swapping = () => {
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
        let temp;
        let strarr = []
        temp = a
        a = b
        b = temp
        setValue(a.concat(" ", b))
    }
  return (
    <div className='wrapper'>
      <h3>Swap the Two strings</h3>
        <label>Enter the first string:</label>
        <input type= "text" id ="string1" name = "firstvalue" value={someState.firstvalue} onChange={handlechange}/>
        <div className='second'>
        <label>Enter the second string:</label>
        <input type= "text" id ="string2" name = "secondvalue" value={someState.secondvalue} onChange={handlechange}/>
        </div>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Swapping