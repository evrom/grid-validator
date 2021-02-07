import React, {useState} from 'react';
import './App.css';
import GridPreview from './GridPreview';
import CssGridTemplateAreas from './CssGridTemplateAreas'

function App() {
  const [gridTemplateAreas, setGridTemplateAreas] = useState("");

  return (
    <div className="App">
      <textarea onChange={e => setGridTemplateAreas(e.target.value)} value={gridTemplateAreas}></textarea>
    <GridPreview cssGridTemplateAreas={new CssGridTemplateAreas(gridTemplateAreas)}></GridPreview>
    </div>
  );
}

export default App;
