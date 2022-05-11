import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main>
        <h1>Animal Farm</h1>

        <input
            type='text'
            placeholder='Search'
            onChange={(e) => console.log(e.target.value)}
        />
    </main>
  )
}

export default App
