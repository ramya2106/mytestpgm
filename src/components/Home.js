import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => {
  return (
    <div className='home'>
        <h2 className='text'>Choose the program which you want to perform</h2>
        <ul>
            <li>
            <Link to="/rvowels">Remove the vowels from the given string</Link>
            </li>
            <li>
            <Link to="/cvowels">Counts the vowels in the string</Link>
            </li>
            <li>
            <Link to="/amstrong">Amstrong or not</Link>
            </li>
            <li>
            <Link to="/palindrome">Palindrome for a given number</Link>
            </li>
            <li>
            <Link to="/strlen">Number of words in string</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home