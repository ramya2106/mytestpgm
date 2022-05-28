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
       </Routes>
    </div>
  )
}

export default App