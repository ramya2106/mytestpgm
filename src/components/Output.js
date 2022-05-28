import React from 'react'

const Output = (input) => {
    const checkEmptyInput = Object.values(input)
  return (
    
    <div>
      <div className='result'>Result: </div>
      {checkEmptyInput}
      </div>
  )
}

export default Output