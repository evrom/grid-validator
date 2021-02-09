import React, { useState } from 'react';

type GridPreviewProps = {
  propertyValue: string,
  namedAreas: Set<string>
}

function GridPreview({ propertyValue, namedAreas }: GridPreviewProps) {
  const gridStyleNamedRegions = {
    gridTemplateAreas: propertyValue
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <h2>View preview of named areas</h2>
      <div>
        Rendered using CSS grid.
        <button onClick={() => setCount(count + 1)}>Add grid child</button>
        {count > 0 ? <button onClick={() => setCount(count - 1)}>Remove grid child</button> : ''}
      </div>
      <div className="grid-preview" style={gridStyleNamedRegions}>
        {Array.from(namedAreas).map((name: string, index: number) => {
          return <div key={name} style={{ gridArea: `${name}` }}>{name}</div>
        })}
        {Array.from(Array(count)).map(() => (
          <div>.</div>
        ))}
      </div>
    </>
  );
}

export default GridPreview;