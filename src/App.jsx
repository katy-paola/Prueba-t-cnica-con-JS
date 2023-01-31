import { useEffect } from 'react'
import getCatPhrase from './services/get-cat-phrase'
import getFiveCatWords from './services/get-five-words';
import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('')
  useEffect(() => {
    getCatPhrase().then(fact => setFact(fact))
  }, [])
  return (
    <>
    <h1>{fact}</h1>
    <h2>{getFiveCatWords(fact)}</h2>
    </>
  )
}

export default App
