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
       </Routes>
    </div>
  )
}

export default App