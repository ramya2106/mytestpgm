import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Sorting = () => {
    const[input,setInput] = useState()
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        event.preventDefault()
        const str = input
        let arr1 = str.split(' ');
        let sort = arr1.sort();
        setValue(' '+ sort)
    }
    function handlechange(event){
        setInput(event.target.value)
    }
    // function handleReset(){
    //     setInput(()=>"")
    //     setValue()
    // }
  return (
    <div className='wrapper'>
        <h3>Sort Words in Alphabetical Order</h3>
        <label>Enter the sentence:</label>
        <input type= "text" id ="string" name="string" value={input} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        {/* <button type = "reset" onClick={handleReset}>Reset</button> */}
        <Output data = {value}/>
    </div>
  )
}

export default Sorting