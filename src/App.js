import React from 'react'
import Navbar from './Components/Navbar';
import Primary from './Components/Primary';
import Cards from './Components/Cards';
import MenuItem from './Components/MenuItem';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Primary />
        <Cards />
        <MenuItem />
      </main>

    </>
  )
}

export default App