import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rvowels from './components/Rvowels';
import Home from './components/Home';
import Cvowels from './components/Cvowels';
import Amstrong from './components/Amstrong';
import Palindrome from './components/Palindrome';
import Stringlen from './components/Stringlen';
import Prime from './components/Prime';
import Fibonacci from './components/Fibonacci';
import Anagram from './components/Anagram';
import Swapping from './components/Swapping';
import Frequency from './components/Frequency';
import Lcm from './components/Lcm';
import Hcf from './components/Hcf';
import Factors from './components/Factors';
import Amicable from './components/Amicable';
import Frequent from './components/Frequent';
import Bsorting from './components/Bsorting';
import Sorting from './components/Sorting';
import Stringcombo from './components/Stringcombo';
import Interest from './components/Interest';

const App = () => {
  return (
    <div>
       <Routes>
        <Route exact path='/mytestpgm' element={<Home/>} />
        <Route path='/rvowels' element={<Rvowels/>} />
        <Route path='/cvowels' element={<Cvowels/>} />
        <Route path='/amstrong' element={<Amstrong/>} />
        <Route path='/palindrome' element={<Palindrome/>} />
        <Route path='/strlen' element={<Stringlen/>} />
        <Route path='/prime' element={<Prime/>} />
        <Route path='/fibonacci' element={<Fibonacci/>} />
        <Route path='/anagram' element={<Anagram/>} />
        <Route path='/swapping' element={<Swapping/>} />
        <Route path='/frequency' element={<Frequency/>} />
        <Route path='/lcm' element={<Lcm/>} />
        <Route path='/hcf' element={<Hcf/>} />
        <Route path='/amicable' element={<Amicable/>} />
        <Route path='/factors' element={<Factors/>} />
        <Route path='/stringcombo' element={<Stringcombo/>} />
        <Route path='/interest' element={<Interest/>} />
        <Route path='/frequent' element={<Frequent/>} />
        <Route path='/sort' element={<Sorting/>} />
        <Route path='/bsort' element={<Bsorting/>} />
       </Routes>
    </div>
  )
}

export default App