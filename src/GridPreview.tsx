import React from 'react';

type GridPreviewProps = {
  propertyValue: string,
  namedAreas: Set<string>
}

function GridPreview({propertyValue, namedAreas}: GridPreviewProps) {
  const gridStyleNamedRegions = {
    gridTemplateAreas: propertyValue
  }

  return (
      <>
        <h2>View preview of named areas</h2>
        <p>Rendered using CSS grid.</p>
      <div className="grid-preview" style={gridStyleNamedRegions}>
        {Array.from(namedAreas).map((name: string, index: number) => {
          return <div key={name} style={{gridArea: `${name}`}}>{name}</div>
        })}
      </div>
      </>
  );
}

export default GridPreview;