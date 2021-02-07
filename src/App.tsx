import React, {useState} from 'react';
import './App.css';
import GridPreview from './GridPreview';
import CssGridTemplateAreas from './CssGridTemplateAreas'

function App() {
  const [gridTemplateAreasInput, setGridTemplateAreas] = useState(`"a a ."
"a a ."
". b c";`);

  return (
    <div className="App">
      <header>
        <h1>CSS Grid Template Validator & Preview</h1>
        <p>Paste your grid <code>grid-template-areas</code> property value and see a preview and diagnosis what is wrong.</p>
      </header>
      <main>
      <textarea onChange={e => setGridTemplateAreas(e.target.value)} value={gridTemplateAreasInput}></textarea>
      <GridPreview cssGridTemplateAreas={new CssGridTemplateAreas(gridTemplateAreasInput)}></GridPreview>
      </main>
    </div>
  );
}

export default App;
