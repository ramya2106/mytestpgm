import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Bsorting = () => {
    const[input,setInput] = useState()
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        const str = input
        let arr = str.split(',');
       
        for(var i = 0; i < arr.length; i++){
     
            // Last i elements are already in place  
            for(var j = 0; j < ( arr.length - i -1 ); j++){
                
              // Checking if the item at present iteration 
              // is greater than the next iteration
              if(arr[j] > arr[j+1]){
                  
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
              }
            }
        }
            setValue(arr+',')
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
      <h3>Bubble sort</h3>
        <label>Enter the array(comma seperated values):</label>
        <input type= "text" id ="string" value={input} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Bsorting