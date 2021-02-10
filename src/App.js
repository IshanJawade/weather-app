import React from 'react';

const api = {
  key: "0b51c0d391ee29559db5bf2466be75b8",
  base: "https://api.openweathermap.org/data/2.5",
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="searchbox">
          <input 
            type='text' 
            className='search-bar'
            placeholder='search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
