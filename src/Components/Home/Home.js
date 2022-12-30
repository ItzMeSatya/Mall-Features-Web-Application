import React from 'react';
import Navbar from '../Navbar';
import Mall from '../Mall/Mall';

function Home() {
  return (
      <div className="App">
          <Navbar />
          <div className="grid">
              <Mall />
          </div>
      </div>
  )
}

export default Home