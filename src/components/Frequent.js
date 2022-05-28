import React from 'react'
import { useState } from 'react'
import Output from './Output'

const Frequent = () => {
    const[input,setInput] = useState({string:""})
    const[value,setValue] = useState()
    const handleSubmit = (event) => {
        setInput(event.target.value)
        const str = input
        var arr1=[];
        arr1 = str.split('');
        var mf = 1;
        var m = 0;
        var item;
        for (var i=0; i<arr1.length; i++)
        {
                for (var j=i; j<arr1.length; j++)
                {
                        if (arr1[i] == arr1[j])
                        m++;
                        if (mf<m)
                        {
                        mf=m; 
                        item = arr1[i];
                        }
                }
                m=0;
        }
        setValue(item+" ( " +mf +" times ) ") ;
    }
    function handlechange(event){
        setInput(event.target.value)
    }
  return (
    <div className='wrapper'>
      <h3>Most Occuring Elements in an Array</h3>
        <label>Enter the data:</label>
        <input type= "text" id ="string" name ="string" value={setInput.string} onChange={handlechange}/>
        
        <button type = "submit" onClick={handleSubmit}>Submit</button>
        <Output data = {value}/>
    </div>
  )
}

export default Frequent