import React from 'react';
import Canvas from './components/time-slot/canvas';

function App() {
  return (
    <div className="wrapper">
      <header className="page-header">
        <div className="container">
          <h3>Scheduler App</h3>
        </div>
      </header>
      <div className="container">
        <div className="col-md-3">Some menu</div>
        <div className="col-md-9">
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default App;
