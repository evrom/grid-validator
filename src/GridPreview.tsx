import React from 'react';
import CssGridTemplateAreas from './CssGridTemplateAreas';

function GridPreview(props: { cssGridTemplateAreas: CssGridTemplateAreas }) {
  const gridStyleTable = {
    gridTemplateColumns: `repeat(${props.cssGridTemplateAreas.columns()}, 1fr)`,
    gridTemplateRows: `repeat(${props.cssGridTemplateAreas.rows()}, 1fr)`
  }

  const gridStyleNamedRegions = {
    gridTemplateAreas: `${props.cssGridTemplateAreas.toPropertyValue()}`
  }

  return (
    <div className="grid-preview-container">
      <div className="grid-preview" style={gridStyleTable}>
        {props.cssGridTemplateAreas.gridTemplate.flat().map((name: string, index: number) => {
          return <div key={index}>{name}</div>
        })}
      </div>
      <div className="grid-preview" style={gridStyleNamedRegions}>
        {Array.from(props.cssGridTemplateAreas.namedAreas()).map((name: string, index: number) => {
          return <div key={name} style={{gridArea: `${name}`}}>{name}</div>
        })}
      </div>
    </div>
  );
}

export default GridPreview;