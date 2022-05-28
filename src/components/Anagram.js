import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Anagram = () => {
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
        let len1 = a.length;
        let len2 = b.length;
        if(len1 !== len2){
            setValue('Invalid Input');
            return
        }
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');
        if(str1 === str2){
            setValue("Two strings are Anagram");
        } else { 
            setValue("Two strings are not Anagram");
        }
    }
  return (
    <div className='wrapper'>
        <h3>Anagram or not</h3>
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

export default Anagram