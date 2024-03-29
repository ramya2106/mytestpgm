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
            <li>
            <Link to="/prime">Prime number or not</Link>
            </li>
            <li>
            <Link to="/fibonacci">Fibonacci Series</Link>
            </li>
            <li>
            <Link to="/anagram">Anagram or not</Link>
            </li>
            <li>
            <Link to="/swapping">Swap the Two strings</Link>
            </li>
            <li>
            <Link to="/frequency">Count character frequency in a string</Link>
            </li>
            <li>
            <Link to="/lcm">LCM of two numbers</Link>
            </li>
            <li>
            <Link to="/hcf">HCF of two numbers</Link>
            </li>
            <li>
            <Link to="/amicable">Amicable or not</Link>
            </li>
            <li>
            <Link to="/factors">Factors of given number</Link>
            </li>
            <li>
            <Link to="/stringcombo">Print name in all possible combination</Link>
            </li>
            <li>
            <Link to="/interest">Simple and Compound Interest</Link>
            </li>
            <li>
            <Link to="/frequent">Most Occuring Elements in an Array</Link>
            </li>
            <li>
            <Link to="/sort">Sort Words in Alphabetical Order</Link>
            </li>
            <li>
            <Link to="/bsort">Bubble sort</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home