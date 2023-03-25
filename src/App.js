import React, { useState } from 'react'
import './App.css'
import { sortLetters } from './utils'

function App() {
  const [word1, setWord1] = useState('')
  const [word2, setWord2] = useState('')
  const [isAnagram, setIsAnagram] = useState(false)
  const [feedback, setFeedback] = useState('')

  const checkAnagram = () => {
    if (!word1 || !word2) {
      return
    }

    const sortedWord1 = sortLetters(word1)
    const sortedWord2 = sortLetters(word2)

    if (sortedWord1 === sortedWord2) {
      setIsAnagram(true)
      setFeedback('Yeah success: The words are anagrams.')
      return
    }

    setIsAnagram(false)
    setFeedback('The words are not anagrams.')
  }

  const isButtonDisabled = !word1 || !word2

  return (
    <div className='App'>
      <h2 className='title'>Anagram Checker</h2>
      <p className='explanation'>
        An anagram is a word or phrase made by rearranging the letters of
        another word or phrase. For example, the word "listen" can be rearranged
        to form the word "silent".
      </p>
      <div className='form-container'>
        <label htmlFor='word1'>Word 1:</label>
        <input
          type='text'
          id='word1'
          value={word1}
          onChange={(e) => setWord1(e.target.value)}
          className='input'
        />
        <label htmlFor='word2'>Word 2:</label>
        <input
          type='text'
          id='word2'
          value={word2}
          onChange={(e) => setWord2(e.target.value)}
          className='input'
        />
        <button
          onClick={checkAnagram}
          className='button'
          disabled={isButtonDisabled}
        >
          Check Anagram
        </button>
      </div>
      {isAnagram && <p className='message success'>{feedback}</p>}
      {!isAnagram && <p className='message error'>{feedback}</p>}
    </div>
  )
}

export default App
