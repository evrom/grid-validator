import React, { useState } from 'react';

type Props = {
  propertyValue: string,
  namedAreas: Set<string>
}

const GridPreview: React.FC<Props> = ({ propertyValue, namedAreas }: Props) => {
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
        {Array.from(namedAreas).map((name: string) => {
          return <div key={name} style={{ gridArea: `${name}` }}>{name}</div>
        })}
        {Array.from(Array(count).keys()).map((i: number) => (
          <div key={i}>.</div>
        ))}
      </div>
    </>
  );
}

export default GridPreview;