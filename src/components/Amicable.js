import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Amicable = () => {
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
        let count_n1 = 0
        let count_n2 = 0
       for(let i=1; i<n1; i++){
           if(n1%i == 0){
            count_n1 = count_n1+i
           }
       }
       for(let j=1; j<n2; j++){
            if(n2%j == 0){
            count_n2 = count_n2+j
            
            }
        }
        if(count_n1 == n2 && count_n2 == n1){
            setValue("Both numbers are Amicable")
        } else {
            setValue("Both numbers are not Amicable")
        }

    }
    
  return (
    <div className='wrapper'>
        <h3>Amicable or not</h3>
        <div>
        <label>Enter the first number: </label>
        <input type= "text" id ="string1" name = "firstvalue" value={someState.firstvalue} onChange={handlechange}/>
        </div>
        <div className='second'>
        <label>Enter the second number: </label>
        <input type= "text" id ="string2" name = "secondvalue" value={someState.secondvalue} onChange={handlechange}/>
        </div>                  
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        
        <Output data={value}/>
    </div>
    
  )
}

export default Amicable