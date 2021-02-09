import React, { useState } from 'react';
import './App.scss';
import GridPreview from './GridPreview';
import GridProperties from './GridProperties';
import GridTable from './GridTable';
import CssGridTemplateAreas from './CssGridTemplateAreas'

function App() {
  const [gridInput, setGridInput] = useState(`"a a ."
"a a ."
". b c";`);
  const [grid, setGrid] = useState(new CssGridTemplateAreas(gridInput));

  function onGridInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input: string = e.target.value;
    setGridInput(input);
    setGrid(new CssGridTemplateAreas(input));
  }

  return (
    <div className="App">
      <header>
        <h1>CSS Grid Template Validator & Preview</h1>
        <p>Paste your <code>grid-template-areas</code> property value and see a preview and diagnosis what is wrong.</p>
      </header>
      <main>
        <textarea onChange={onGridInputChange} value={gridInput}></textarea>
        <GridProperties
          rows={grid.rows()}
          columnsPerRow={grid.columnsPerRow()}
          isRectangular={grid.isRectangular()}
          nonContigousAreas={grid.findNotContigous()}
        />
        <GridPreview
          namedAreas={grid.namedAreas()}
          propertyValue={grid.toPropertyValue()}
        />
        <GridTable gridTemplate={grid.gridTemplate} />
      </main>
    </div>
  );
}

export default App;
