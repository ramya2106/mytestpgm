import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Hcf = () => {
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
        let n1 = someState.firstvalue
        let n2 = someState.secondvalue
        let min = n1>n2 ? n1:n2
        while(true){
            if(min%n1 == 0 && min%n2 == 0){
                let hcf = (n1*n2)/min
                setValue(hcf)
                break
            }
            min++
        }
    }
  return (
    <div className='wrapper'>
        <h3>HCF of two numbers</h3>
        <label>Enter the first number: </label>
        <input type= "text" id ="string1" name = "firstvalue" value={someState.firstvalue} onChange={handlechange}/>
        <div className='second'>
        <label>Enter the second number: </label>
        <input type= "text" id ="string2" name = "secondvalue" value={someState.secondvalue} onChange={handlechange}/>
        </div>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data={value}/>
    </div>
    
  )
}

export default Hcf