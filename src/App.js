import React from 'react';
import Canvas from './components/layout/canvas';
import Owner from './components/owner/owner-form';

function App() {
  return (
    <div className="wrapper">
      <header className="page-header">
        <div className="container">
          <h3>Scheduler App</h3>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Owner />
          </div>
          <div className="col-md-9">
            <Canvas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
