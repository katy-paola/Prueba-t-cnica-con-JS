import { useEffect } from 'react'
import getCatPhrase from './services/get-cat-phrase'
import getFiveCatWords from './services/get-five-words';
import { useState } from 'react';
import '../css/app.css'

function App() {
  const [fact, setFact] = useState('')
  useEffect(() => {
    getCatPhrase().then(fact => setFact(fact))
  }, [])
  return (
    <div className='container'>
      <h1>{fact}</h1>
      {fact && <img src={`https://cataas.com/cat/says/${getFiveCatWords(fact)}`} alt="imagen aleatoria de gato" />}
    </div>
  )
}

export default App
