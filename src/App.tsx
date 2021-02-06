import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [gridTemplateAreas, setGridTemplateAreas] = useState("");

  return (
    <div className="App">
      <textarea onChange={e => setGridTemplateAreas(e.target.value)} value={gridTemplateAreas}></textarea>
    </div>
  );
}

export default App;
