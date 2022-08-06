import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value="" onChange={(e) => e.preventDefault()}/>
        <input type="submit" value="追加" onSubmit={(e) => e.preventDefault()}/>
      </form>
    </>
  )
}

export default App
