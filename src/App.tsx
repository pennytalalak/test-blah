import React from 'react';
import { makeRequest } from './Test/API';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          makeRequest().then(console.log);

        }}
        style={{height: 250, width :250}}>
          Test
        </button>
      </header>

    </div>
  );
}

export default App;
