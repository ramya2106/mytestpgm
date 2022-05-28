import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Interest = () => {
    const [someState, setSomeState] = useState({
        firstvalue: "",
        secondvalue: "",
        thirdvalue: ""
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
        let c = someState.thirdvalue;
        let si = (a*b*c)/100;
        let ci = Math.floor(a*Math.pow((1+b/100),c));
        setValue("Simple Interest value is "+si+" Compound Interest value is "+ci)
    }
  return (
    <div className='wrapper'>
      <h3>Simple and Compound Interest</h3>
        <label>Enter the Principal amount:</label>
        <input type= "text" id ="string1" name = "firstvalue" value={someState.firstvalue} onChange={handlechange}/>
        <div className='second'>
        <label>Enter the Interest Rate:</label>
        <input type= "text" id ="string2" name = "secondvalue" value={someState.secondvalue} onChange={handlechange}/>
        </div>
        <div className='second'>
        <label>Enter the Number of years:</label>
        <input type= "text" id ="string3" name = "thirdvalue" value={someState.thirdvalue} onChange={handlechange}/>
        </div>
        <button type = "submit" onClick={handleSubmit}>Calculate Interest</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Interest